<script>
	import '$lib/styles/lightMode.css'
  import { Stepper } from '$lib'
</script>


<div class='stepper-container'>
  <Stepper label='Optional Label' />
</div>


<style>
  .stepper-container {
		width: 100%;
		padding: 12px 0;
		display: flex;
		justify-content: center;
  }

  :global(.stepper) {
    outline: none;
  }
</style>