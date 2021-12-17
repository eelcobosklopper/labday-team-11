<script>
	import Button from '../components/button.svelte';
	import QuestionCard from '../components/question-card.svelte';
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

<style>
	:global(#svelte) {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
		overflow: hidden;

		background: hsl(0, 0%, 95%);

		display: flex;
		align-items: center;
		justify-content: center;
	}	
</style>

<div class="app">
	<QuestionCard class="quiz__card"></QuestionCard>
</div>