<script>
	import startTimer from '../effects/pomodoroTimer';
	import Button from '../components/button.svelte';
	let visible = false;

	const lessons = [
		{ id: 'J---aiyznGQ', name: 'Les 1' },
		{ id: 'z_AbfPXTKms', name: 'Les 2' },
		{ id: 'OUtn3pvWmpg', name: 'Les 3' }
	];

	function toggleMe() {
		visible = !visible;
	}

	function showMessage() {
		console.log('take a break!');
	}

	function finished() {
		console.log('finished!');
	}
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<div class="container">
	<h1>Welcome to The Accessible Dutch Course</h1>
	<ul>
		{#each lessons as lesson}
			<li>
				<a target="_blank" href="https://www.youtube.com/watch?v={lesson.id}">
					{lesson.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

<Button click={toggleMe} text="Click me" />
<Button click={startTimer(3000, 3, showMessage, finished)} text="Start timer" />

{#if visible}
	<p>Hello!</p>
{/if}

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
	li {
		list-style: none;
		font-size: 24px;
		width: 300px;
		margin: 20px;
		text-align: center;
		background: rgb(241, 241, 241);
		border-radius: 10px;
	}
	li:hover {
		filter: drop-shadow(0 0 0.5rem #ffaf37);
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px;
		background-color: aliceblue;
	}
	a {
		color: black;
		text-decoration: none;
	}
</style>
