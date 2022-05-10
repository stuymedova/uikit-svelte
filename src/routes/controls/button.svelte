<script>
	import '$lib/styles/lightMode.css'
  import { Button } from '$lib'
</script>



<div class='content-wrapper'>
  <div class='button-container'>
    <p>Push button</p>
    <Button role='primary'>Label</Button>
  </div>

  <div class='button-container'>
    <p>Switch button</p>
    <Button behaviour='switch'>Label</Button>
  </div>

  <div class='button-container'>
    <p>Popover button</p>
    <Button behaviour='popover' wrapperId='popover-button-wrapper-1' id='popover-button-1'>
      Label

      <!-- TODO: note in a doc what svelte:fragment does (first example with a span, second with a svelte:fragment) -->
      <svelte:fragment slot='popover'>
        Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi.
      </svelte:fragment>
    </Button>
  </div>
</div>



<style>
  .content-wrapper {
		width: 100%;
		padding-top: 12px;
		display: flex;
    flex-direction: column;
		align-items: center;
    gap: 12px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
		align-items: center;
  }

  p {
    margin-bottom: 12px;
  }

  /* :global(.button) {
    outline: none;
  } */
</style>