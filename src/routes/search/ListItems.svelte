<script>
	import { filtered } from './stores.js';
</script>

<ul>
{#each $filtered as word}
	<li>{word}</li>
{/each}
</ul>


<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }

  li {
    padding: 0.6em 1em;
    margin: 3px;
    background-color: var(--color-bg-2);
    transition: 0.2s ease;
    font-size: 1.5em;
    border-radius: 3px;
    
  }

  li:hover {
    background-color: var(--color-theme-2);
    color: var(--color-text);
  }
</style>