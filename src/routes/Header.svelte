<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/jordle.png';
</script>

<header>
	<div class="logo">
		<a href="/">
			Jordle
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname.startsWith('/jordle') ? 'page' : undefined}>
				<a href="/jordle">Jordle</a>
			</li>
			<li aria-current={$page.url.pathname === '/search' ? 'page' : undefined}>
				<a href="/search">Search</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/#help">Help</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	.logo {
		display: flex;
		align-items: center;
		margin-left: 1em;
	}

	.logo a {
		color: var(--color-text);
		font-size: 1.2em;
		font-weight: 700;
		text-decoration: none;
	}

	nav {
		display: flex;
		justify-content: center;
		margin-right: 1em;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
