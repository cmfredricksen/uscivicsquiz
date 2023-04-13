<script>
	const links = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Profile',
			path: '/profile'
		}
	];
</script>

<nav>
	{#each links as link}
		<a href={link.path}>{link.title}</a>
	{/each}
</nav>

<style>
	a {
		margin: 0 1rem;
		font-size: 1.5rem;
	}
</style>
