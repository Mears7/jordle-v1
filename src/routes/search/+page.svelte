<script>
import { words } from "./words.js"; 
import { inputValue, filteredWords, counter } from './stores.js';

const filterFunction = () => {
	$filteredWords = words.filter(word => word.toLowerCase().match($inputValue.toLowerCase()));
	$counter = $filteredWords.length;
}
</script>

<svelte:head>
	<title>Jordle Search</title>
	<meta name="description" content="Jordle Search" />
</svelte:head>

<div class="container">
	<aside class="sidebar">
		<div class="search">
			<input 
				type="text" 
				placeholder="Search" 
				autocomplete="off" 
				bind:value={$inputValue} 
				on:keyup={filterFunction} 
			/>
		</div>
	</aside>
	
	<section class="content">
		<div class="meta">
			<span class="word-count">Words: {$counter}</span>
		</div>

		{#if $filteredWords.length > 0}
			<div class="words">
				
				{#each $filteredWords as word}
					<div class="word">{word}</div>
				{/each}
			</div>
		{:else}
			<div>
				<h1>Jordlebase</h1>
				<p>Search the list of valid guesses, of which the list of possible words is a subset. <br/>
				Use . as a wildcard letter.</p>
			</div>
		{/if}
	</section>
</div>

<style>
	/* Structure */
	.content {
		padding: 2rem;
	}

	h1 {
		margin: 0;
	}
	.sidebar {
		padding: 4rem 0 0 0;
	}

	@media only screen and (min-width: 1000px) {
		.container {
			display: grid;
			grid-template-columns: 300px 1fr;
			min-height: 100vh;
		}

		.content {
			padding: 5rem 3rem;
		}

		.sidebar {
			border-right: 1px solid var(--color-border);
			padding: 5rem 1rem 1rem 1rem;
		}
	}

	/* Search */
	.search {
		width: 100%;
	}

	input {
		width: 100%;
		padding: 15px 25px;
		border: 1px solid var(--color-bg-0);
		background-color: var(--color-bg-2);
		color: var(--color-text-1);
		font-size: 1.2em;
		border: 2px solid var(--color-theme-1);
		border-radius: 3px;
		box-sizing: border-box;
	}

	input:focus {
		outline: none;
		border-color: var(--color-theme-2);
	}

	input::placeholder {
		color: var(--color-text-2);
	}

	/* Words */
	.meta {
		display: block;
		width: 100%;
		margin-bottom: 1rem;
	}
	.word-count {
		font-size: 0.8em;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.words {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }

  .word {
    padding: 0.6em 1em;
    margin: 3px;
    background-color: var(--color-bg-2);
    transition: 0.2s ease;
    border-radius: 3px;
  }

  .word:hover {
    background-color: var(--color-theme-2);
    color: var(--color-text);
  }

  @media only screen and (min-width: 800px) {
    .word {
      font-size: 1.5em;
    }
  }
</style>
