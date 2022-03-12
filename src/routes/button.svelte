<script>
	import '$lib/styles/lightMode.css'
  import { Button } from '$lib'
</script>


<div class='button-container'>
  <Button>Button</Button>
</div>


<style>
  .button-container {
		width: 100%;
		padding-top: 12px;
		z-index: 99;
		display: flex;
		justify-content: center;
  }

  :global(.button) {
    outline: none;
  }
</style>