<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>US Civics Quiz</title>
</svelte:head>

<Header />
<div class="wrapper">
	<slot><!-- optional fallback --></slot>
</div>

<style>
	.wrapper {
		width: 90vw;
		margin: 0 auto;
	}
</style>
