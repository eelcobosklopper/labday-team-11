<script>
	import Microphone from 'svelte-material-icons/Microphone.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	let recognition;
	let seconds = 4;

	onMount(() => {
		if ('webkitSpeechRecognition' in window) {
			const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			recognition = new SpeechRecognition();

			// Set speech recognition options
			recognition.continuous = false;
			recognition.interimResults = false;
			recognition.lang = 'nl-NL';

			recognition.onresult = (res) => {
				const result = res.results[0][0].transcript;
				dispatch('result', {
					text: result
				});
			};

			recognition.onend = () => {
				seconds = 0;
				active = false;
				dispatch('stop');
			};
			recognition.onstart = () => {
				active = true;
				dispatch('start');
			};
		} else {
			console.warn('Speech recognition not available');
		}

		const interval = setInterval(() => {
			console.log(seconds);
			seconds = seconds - 1;
			if (seconds === 0) {
				toggleSpeech();
				clearInterval(interval);
			}
		}, 1000);
	});

	const dispatch = createEventDispatcher();
	let active = false;

	function toggleSpeech() {
		active ? recognition.stop() : recognition.start();
	}
</script>

<div class="microphone-button {active ? 'active' : ''}" on:click={toggleSpeech}>
	<span class="icon-wrapper">
		<Microphone size="100%" color={active ? '#111' : '#aaa'} />
	</span>
</div>
{#if seconds > 0}
<div class="countdown">
	<span>Spraak wordt actief in {seconds}</span>
</div>
{/if}

<style>
	.microphone-button {
		margin: 8px auto;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: #efefef;
		border: 1px solid #e0e0e0;
		cursor: pointer;
	}

	.icon-wrapper {
		width: 32px;
		height: 32px;
	}

	.active .icon-wrapper {
		transform: scale(1);
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(0.9);
		}
	}
</style>
