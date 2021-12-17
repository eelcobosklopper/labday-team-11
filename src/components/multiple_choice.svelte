<script>
	import Button from './button.svelte';

	let word = {
		image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Stroopwafels_01.jpg',
		correct_word: 'stroopwafel',
		options: ['stroopwafel', 'bitterkoek', 'appeltaart', 'shoarma']
	};

	// vergelijk button-word met {word.correct_word}
    
</script>

<h1>Hello world</h1>

<img src={word.image} alt="stroopwafel, a dutch syrup waffle" />
<div>
	<h2>
	Wat is correct?
    </h2>
</div>
<div>
	{#each word.options as words, i}
		<Button text={i + 1 + words} />
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
