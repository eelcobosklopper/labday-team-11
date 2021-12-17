<script>
	import Button from './button.svelte';

    let choices = ["a","b","c","d"]
</script>

<h1>Hello world</h1>

<img
	src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
	alt=""
/>
<div>
    {#each {length: 4} as _, i}
	<Button text={i+1} />
    {/each}
</div>

<style>
	h1 {
		font-size: 2rem;
	}
</style>
