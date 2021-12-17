<script>
	import Quiz from '../components/question-card.svelte';
</script>

<div class="container">
	<h1>Les 1</h1>
	<h2>Wat is dit?</h2>
	<Quiz />
	<h2>Antwoord:</h2>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.container h1 {
		font-size: 50px;
	}
</style>
