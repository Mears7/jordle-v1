<script>
	import {term} from './stores.js';
	let val = '';
	
	$: term.set(val);
</script>

<div class="search">
	<input 
		bind:value={val} 
		type="text" 
		id="searchInput"
		placeholder="Search wordbase" 
	/>
</div>

<style>
	.search {
		width:100%;
		max-width: 250px;
	}

	input {
		padding: 15px 25px;
		border: 1px solid var(--color-bg-0);
		background-color: var(--color-bg-2);
		color: var(--color-text-1);
		width: 100%;
		font-size: 1.2em;
		border: 2px solid var(--color-theme-1);
		border-radius: 3px;
	}

	input:focus {
		outline: none;
		border-color: var(--color-theme-2);
	}

	input::placeholder {
		color: var(--color-text-2);
	}
</style>