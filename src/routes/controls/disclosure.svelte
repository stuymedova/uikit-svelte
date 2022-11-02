<script>
	import '$styles/lightMode.css'
  import { Wrapper } from '$lib'
  import { Disclosure } from '$lib'
</script>


<Wrapper class='component-wrapper'>
  <Disclosure generateIdsFrom='disclosure'>
    Lacus sed turpis tincidunt id aliquet?
    
    <svelte:fragment slot='content'>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
    </svelte:fragment>
  </Disclosure>
</Wrapper>


<style>
  :global(.component-wrapper) {
		width: 100%;
		padding-top: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
    gap: 12px;
  }
</style>