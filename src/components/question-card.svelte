<script>
	import { AudioPlayer } from '../effects/audio/AudioPlayer';
	import { onMount } from 'svelte';

	export let question = {
		imgSrc: '/tree.png',
		answers: ['Boom', 'Maan', 'Roos', 'Vis'],
		correct: 'Boom'
	};

	let result = false;
	let player;
	let SUCCESS_SOUND;
	let FAILURE_SOUND;
	onMount(async () => {
		player = new AudioPlayer();
		player.init();
		SUCCESS_SOUND = await player.load('success', 'assets/fx-samples/winning-a-coin.wav');
		FAILURE_SOUND = await player.load('failure', 'assets/fx-samples/losing-a-coin.wav');
	});

	const onClickFactory = (index) => (event) => {
		if (question.answers[index] === question.correct) {
			result = true;

			player.play(SUCCESS_SOUND);
		} else {
			result = false;

			player.play(FAILURE_SOUND);
		}
	};
</script>

<section class="q-card">
	<div class="q-card__question">
		<img src={question.imgSrc} alt="What do you see?" />
	</div>

	<div class="q-card__answers">
		{#each question.answers as answer, i}
			<button class="q-card__answer q-card__answer--{i}" on:click={onClickFactory(i)}
				>{answer}</button
			>
		{/each}
	</div>
	{#if result}
		<p>Well done!</p>
	{/if}
</section>

<style>
	.q-card {
		background: white;
		border: 1px solid hsl(0, 0%, 80%);
		border-radius: 2rem;

		width: min-content;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;

		padding: 0.5rem 1rem;
	}

	.q-card__question {
		width: 75vw;
		max-width: 256px;

		background: hsl(230, 90%, 95%);
		border: 6px solid hsl(230, 100%, 20%);
		border-radius: 50%;

		overflow: hidden;
	}

	.q-card__question img {
		width: 100%;
	}

	.q-card__answers {
		display: grid;
		grid-template-areas:
			'a a'
			'b c'
			'd d';

		align-items: center;
		justify-items: center;
	}

	.q-card__answer {
		background: #ffffff;

		margin: 0.5rem 1rem;

		border-radius: 1em;
		padding: 1em 2em;

		width: max-content;

		color: white;
		font-weight: bold;

		--card-color: hsl(0, 0%, 100%);
		--card-border-color: hsl(0, 0%, 100%);
		--card-shadow-color: hsl(0, 0%, 100%);

		background: var(--card-color);
		border: 1px solid var(--card-border-color);
		box-shadow: 1px 2px 1px 3px var(--card-shadow-color);
	}

	.q-card__answer:active {
		box-shadow: inset 1px 2px 1px 3px var(--card-shadow-color);
	}

	.q-card__answer:hover,
	.q-card__answer:focus {
		transform: scale(1.1);
	}

	.q-card__answer.q-card__answer--0 {
		grid-area: a;
		--card-color: hsl(0, 70%, 50%);
		--card-border-color: hsl(0, 100%, 50%);
		--card-shadow-color: hsl(0, 100%, 30%);
	}

	.q-card__answer.q-card__answer--1 {
		grid-area: b;
		--card-color: hsl(240, 70%, 50%);
		--card-border-color: hsl(240, 100%, 50%);
		--card-shadow-color: hsl(240, 100%, 30%);
	}

	.q-card__answer.q-card__answer--2 {
		grid-area: c;
		--card-color: hsl(128, 70%, 30%);
		--card-border-color: hsl(128, 100%, 30%);
		--card-shadow-color: hsl(128, 100%, 20%);
	}

	.q-card__answer.q-card__answer--3 {
		grid-area: d;
		--card-color: hsl(300, 90%, 40%);
		--card-border-color: hsl(300, 100%, 40%);
		--card-shadow-color: hsl(300, 100%, 30%);
	}
</style>
