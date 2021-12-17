<script>
	import Button from './button.svelte';
	import Microphone from 'svelte-material-icons/Microphone.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	let recognition;

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

<style>
	.microphone-button {
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
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.90);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(0.90);
		}
	}
</style>
