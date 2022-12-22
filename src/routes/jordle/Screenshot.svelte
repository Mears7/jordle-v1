<script>
  import html2canvas from 'html2canvas';

  export const takeScreenshot = () => {
    const captureElement = document.querySelector('#capture')
    html2canvas(captureElement)
      .then(canvas => {
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
        return canvas
      })
      .then(canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'jordle-win.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
      })
   }
</script>

<button class="button controls-finished" on:click={takeScreenshot}>Download screenshot</button>

<style>
  .controls-finished {
    max-width: 250px;
  }
</style>
