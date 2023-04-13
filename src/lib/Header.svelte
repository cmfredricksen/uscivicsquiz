<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<h1>US Civics Quiz</h1>
	<h2>United We Stand</h2>
	<Nav />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 1rem 1rem 2rem;
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-family: var(--font-cursive);
		font-weight: 300;
	}
</style>
