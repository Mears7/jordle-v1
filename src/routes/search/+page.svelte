<script>
	import Search from './Search.svelte';
	import ListItems from './ListItems.svelte';
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Search Jordle" />
</svelte:head>

<section>
		<Search></Search>
	<ListItems></ListItems>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
