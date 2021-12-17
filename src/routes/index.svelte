<script>
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

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
