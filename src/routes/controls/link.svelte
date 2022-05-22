<script>
	import '$lib/styles/lightMode.css'
  import { Link } from '$lib'
</script>


<div class='link-container'>
  <Link 
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
  >
    Label
  </Link>
</div>


<style>
  .link-container {
		width: 100%;
		padding-top: 12px;
		display: flex;
		justify-content: center;
  }

  :global(.link) {
    outline: none;
  }
</style>