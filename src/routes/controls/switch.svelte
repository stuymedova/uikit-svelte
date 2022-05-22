<script>
	import '$lib/styles/lightMode.css'
  import { Switch } from '$lib'
</script>


<div class='switch-container'>
  <Switch label='Optional Label' />
</div>


<style>
  .switch-container {
		width: 100%;
		padding: 12px 0;
		display: flex;
		justify-content: center;
  }

  :global(.switch) {
    outline: none;
  }
</style>