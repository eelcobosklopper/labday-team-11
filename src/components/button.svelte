<script>
	export let click;
	export let text;
	export let classNames;
</script>

<button on:click={click} class={classNames}>{text}</button>
