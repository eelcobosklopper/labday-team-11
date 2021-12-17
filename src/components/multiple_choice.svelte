<script>
	import Button from './button.svelte';

	let word = {
		image: 'static/bos.png',
		correct_word: 'bos',
		options: ['bloem', 'bos', 'hout', 'bieslook']
	};
	let result = false;

	// vergelijk button-word met {word.correct_word}
	function compareWords() {
		word.correct_word == event.target.textContent ? (result = true) : (result = false);
		// console.log(result);
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
