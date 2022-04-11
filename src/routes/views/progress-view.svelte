<script>
	// import '$lib/styles/lightMode.css'
  import { ProgressView } from '$lib'
</script>


<div class='progress-view-container'>
  <ProgressView />
</div>


<style>
  .progress-view-container {
		width: 100%;
		padding-top: 12px;
		z-index: 99;
		display: flex;
		justify-content: center;
  }

  :global(.progress-view-progress) {
    outline: none;
  }
</style>