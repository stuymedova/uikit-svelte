<script>
	import '$styles/system-display/lightMode.css'
  import { Button } from '$lib'
</script>


<div class='content-wrapper'>
  <div class='component-wrapper'>
    <p>Push button</p>
    <Button>Label</Button>
  </div>

  <div class='component-wrapper'>
    <p>Switch button</p>
    <Button behaviour='switch'>Label</Button>
  </div>

  <div class='component-wrapper'>
    <p>Popover button</p>
    
    <!-- TODO: note in documentation that an id needs to be specified per component once, the button will have an id posfixed by '--trigger' and a popover will have an id unchanged -->
    <Button behaviour='popover' id='popover'>
      Label

      <!-- TODO: note in documentation what svelte:fragment does (first example with a span, second with a svelte:fragment) -->
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

  .component-wrapper {
    display: flex;
    flex-direction: column;
		align-items: center;
  }

  p {
    margin-bottom: 12px;
  }
</style>