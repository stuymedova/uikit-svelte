<script>
	import '$styles/system-display/lightMode.css'
  import { PopoverAnchor, Popover } from '$lib'
</script>


<div class='component-wrapper'>
  <PopoverAnchor isPopoverDisplayed={true}>
    <p>Text</p>
    <Popover>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi.
    </Popover>
  </PopoverAnchor>
</div>


<style>
  .component-wrapper {
		width: 100%;
		padding-top: 12px;
		display: flex;
    flex-direction: column;
		align-items: center;
    gap: 12px;
  }
</style>