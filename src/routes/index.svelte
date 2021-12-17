<script>
import { onMount } from 'svelte';

	import Button from '../components/button.svelte';
	let visible = false;

	const cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

	function toggleMe() {
		visible = !visible;
	}

	let showFirst = false;
	let showThreeOnARow = false;

	onMount(() => {
		window.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			showFirst = false;
			showThreeOnARow = false;
		}
	})
})

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	{#each cats as cat}
		<li>
			<a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
				{cat.name}
			</a>
		</li>
	{/each}
</ul>

<Button click={toggleMe} text="Click me" />

{#if visible}
	<p>Hello!</p>
{/if}

<button on:click="{() => showFirst = !showFirst}">First</button>
<button on:click="{() => showThreeOnARow = !showThreeOnARow}">3 in  row</button>

<div class="overlay" class:show="{showFirst}">
	<div class="pop-up">
		<div class="margin-bottom-32">
			<h2>Goed gedaan!</h2>
			<img class="img-fluid margin-bottom-32" src="assets/first.png" alt="First">
			<h3 class="subtitle margin-bottom-8">Uitdager</h3>
			<p class="margin-top-0">Je hebt je eerste woord geleerd!</p>
		</div>
		<button class="btn btn-primary" on:click="{() => showFirst = !showFirst}">Sluiten</button>
	</div>
</div>

<div class="overlay" class:show="{showThreeOnARow}">
	<div class="pop-up">
		<div class="margin-bottom-32">
			<h2>Goed bezig!</h2>
			<img class="img-fluid margin-bottom-32" src="assets/employee.png" alt="First">
			<h3 class="subtitle margin-bottom-8">Wildfire</h3>
			<p class="margin-top-0">3 op een rij!</p>
		</div>
		<button class="btn btn-primary" on:click="{() => showThreeOnARow = !showThreeOnARow}">Sluiten</button>
	</div>
</div>


<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	.margin-top-0 {
		margin-top: 0;
	}
	.margin-bottom-8 {
		margin-bottom: 8px;
	}
	.margin-bottom-32 {
		margin-bottom: 32px;
	}

	.subtitle {
		font-weight: 200;
		text-transform: uppercase;
	}

	.overlay {
	  	height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.7);
		display: none;
	}

	.show {
		display: block !important;
	}

	.pop-up {
		background: #fff;
		border-radius: 25px;
		width: 300px;
		z-index: 100;
		margin: 0 auto;
		top: 25%;
		position: relative;
		padding: 32px;
		text-align: center;
	}

	.btn {
		display: block;
		border-radius: 18px;
		padding: 8px 16px;
		width: 100%;
		background-color: #38AEFF;
		border: none;
		color: white;
		cursor: pointer;
		text-transform: uppercase;
	}

	.img-fluid {
		max-width: 100%;
		height: auto;
	}

</style>
