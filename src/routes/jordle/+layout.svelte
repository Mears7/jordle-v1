<section class="jordle">
  <div class="jordle-container">
    <slot></slot>
  </div>
</section>

<style>
  .jordle {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .jordle-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>