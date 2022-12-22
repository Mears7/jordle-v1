<script>
	let year = new Date().getFullYear()
</script>

<footer>
  <p><a href="/">JORDLE</a> ⓒ {year}</p>
</footer>

<style>
  footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		border-top: 1px solid var(--color-border);
	}

	footer a {
		font-weight: bold;
	}

	footer p {
		font-size: 12px;
		letter-spacing: 1px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>