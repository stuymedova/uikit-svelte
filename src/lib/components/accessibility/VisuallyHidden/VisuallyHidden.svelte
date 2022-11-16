<script>
  export let renderAs = 'span'
</script>


<svelte:element this={renderAs} class='visually-hidden'>
  <slot />
</svelte:element>