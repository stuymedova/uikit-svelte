<script>
  export let htmlTag = 'span'
</script>


<svelte:element this={htmlTag} class='visually-hidden'>
  <slot />
</svelte:element>