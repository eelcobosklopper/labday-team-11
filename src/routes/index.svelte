<script>
	const lessons = [
		{ id: 'J---aiyznGQ', name: 'Les 1' },
		{ id: 'z_AbfPXTKms', name: 'Les 2' },
		{ id: 'OUtn3pvWmpg', name: 'Les 3' }
	];
	const achievements = [
		{
			id: 1,
			name: 'first',
			title: 'Goed gedaan!',
			subTitle: 'Uitdager!',
			body: 'Je hebt je eerste woord geleerd!',
			show: false
		},
		{
			id: 2,
			name: 'threeOnARow',
			title: 'Goed bezig!',
			subTitle: 'Wildfire!',
			body: '3 op een rij!',
			show: false
		},
		{
			id: 3,
			name: 'graduation',
			title: 'Blijf zo doorgaan!',
			subTitle: 'Progressie!',
			body: 'Je bent een snelle leerling!',
			show: false
		}
	];
</script>

{#each achievements as achievement}
	<button class="btn btn-default" on:click={() => (achievement.show = !achievement.show)}
		>{achievement.id}</button
	>

	<div class="overlay" class:show={achievement.show} on:click={() => (achievement.show = false)}>
		<div class="pop-up">
			<div class="margin-bottom-32">
				<h2>{achievement.title}</h2>
				<img
					class="img-fluid margin-bottom-32"
					src="assets/{achievement.name}.png"
					alt={achievement.title}
				/>
				<h3 class="subtitle margin-bottom-8">{achievement.subTitle}</h3>
				<p class="margin-top-0">{achievement.body}</p>
			</div>
			<button class="btn btn-primary d-block w100" on:click={() => (achievement.show = false)}
				>Sluiten</button
			>
		</div>
	</div>
{/each}

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

<style>
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
		background-color: rgba(0, 0, 0, 0.7);
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

	.d-block {
		display: block;
	}

	.w100 {
		width: 100%;
	}

	.btn {
		appearance: none;
		border-radius: 18px;
		padding: 8px 16px;
		border: none;
		cursor: pointer;
		text-transform: uppercase;
		font-size: 16px;
		line-height: 1.5;
	}

	.btn-default {
		border-radius: 4px;
	}

	.btn-primary {
		background-color: #38aeff;
		color: white;
	}

	.img-fluid {
		max-width: 100%;
		height: auto;
	}
</style>
