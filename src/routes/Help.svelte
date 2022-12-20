<section class="help" id="help">
  <div class="help-content">
    <h2>How to play Jordle</h2>

    <p>
      Jordle is a clone of Sverdle which is a clone of <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>, the
      word guessing game. To play, enter a five-letter English word. For example:
    </p>
  
    <div class="example">
      <span class="close">r</span>
      <span class="missing">i</span>
      <span class="close">t</span>
      <span class="missing">z</span>
      <span class="exact">y</span>
    </div>
  
    <p>
      The <span class="exact">y</span> is in the right place. <span class="close">r</span> and
      <span class="close">t</span>
      are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
      Let's make another guess:
    </p>
  
    <div class="example">
      <span class="exact">p</span>
      <span class="exact">a</span>
      <span class="exact">r</span>
      <span class="exact">t</span>
      <span class="exact">y</span>
    </div>
  
    <p>This time we guessed right! You have <strong>six</strong> guesses to get the word.</p>
  
    <p>
      Unlike the original Wordle, Sverdle and Jordle run on the server instead of in the browser, making it
      impossible to cheat. It uses <code>&lt;form&gt;</code> and cookies to submit data, meaning you can
      even play with JavaScript disabled!
    </p>

		<a href="/jordle">Play here.</a>
  </div>
</section>

<style>
  section.help {
    position: relative;
    z-index: 10;
	}

  .help-content {
		max-width: 600px;
		margin: 10vh auto;
    padding: 1em;
    background: rgba(0,0,0,0.9);
		border-radius: 3px;
  }

	@media only screen and (min-width: 800px) {
		.help-content {
			padding: 3em;
		}
	}

	h2 {
		font-weight: 900;
		font-size: 2em;
		margin: 0 0 1em 0;
	}

	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8em;
		width: 2.4em;
		height: 2.4em;
		background-color: var(--color-bg-2);
		box-sizing: border-box;
		border-radius: 2px;
		border-width: 2px;
		color: var(--color-text);
	}

	.missing {
		background: var(--color-bg-2);
		color: var(--color-text);
	}

	.close {
		border-style: solid;
		border-color: var(--color-theme-2);
	}

	.exact {
		background: var(--color-theme-2);
		color: white;
	}

	.example {
		display: flex;
		justify-content: flex-start;
		margin: 1rem 0;
		gap: 0.2rem;
	}

	.example span {
		font-size: 1.4rem;
	}

	p span {
		position: relative;
		border-width: 1px;
		border-radius: 1px;
		font-size: 0.4em;
		transform: scale(2) translate(0, -10%);
		margin: 0 1em;
	}
</style>