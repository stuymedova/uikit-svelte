<script>
  import '$styles/main.css'
  import { Symbol } from '$lib'
  import { Plus } from '$symbols'
</script>


<div class='component-wrapper'>
  <p><Symbol symbol={Plus} /> Add to cart</p>
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