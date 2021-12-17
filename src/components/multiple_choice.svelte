<script>
	import Button from './button.svelte';
	import { AudioPlayer } from '../effects/audio/AudioPlayer';
    import { onMount } from 'svelte';

	let word = {
		image: 'static/bos.png',
		correct_word: 'bos',
		options: ['bloem', 'bos', 'hout', 'bieslook']
	};
	let result = false;
	let audio = new AudioPlayer();

    onMount(() => {
         audio.init();
    });


	// vergelijk button-word met {word.correct_word}
	function compareWords() {

		audio.load('correct', 'assets/fx-samples/winning-a-coin.wav');
		audio.load('incorrect', 'assets/fx-samples/losing-a-coin.wav');
		if (word.correct_word == event.target.textContent) {
			result = true;
			audio.play('correct');
		} else {
			result = false;
			audio.play('incorrect');
		}
	}
</script>

<h1>Niveau 1</h1>

<img src={word.image} alt={word.correct_word} />
<div>
	<h2>Wat is correct?</h2>
</div>
<div>
	{#each word.options as words, i}
		<Button text={words} click={compareWords} />
	{/each}
</div>

<style>
	h1 {
		font-size: 2rem;
	}

	img {
		width: 200px;
	}
</style>
