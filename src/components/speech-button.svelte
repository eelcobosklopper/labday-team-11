<script>
	import Button from './button.svelte';
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
			console.warn('Speech recognition not available')
		}
	});

	const dispatch = createEventDispatcher();
	let active = false;

	function toggleSpeech() {
		active ? recognition.stop() : recognition.start();
	}
</script>

<Button click={toggleSpeech} text={active ? 'Stop' : 'Start met luisteren'} />
