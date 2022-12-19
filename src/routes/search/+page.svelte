<script>
	import Search from './Search.svelte';
	import ListItems from './ListItems.svelte';
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Search Jordle" />
</svelte:head>

<section>
	<div class="search">
		<Search></Search>
	</div>

	<ListItems></ListItems>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	.search {
		margin: 3em 0;
	}
</style>
