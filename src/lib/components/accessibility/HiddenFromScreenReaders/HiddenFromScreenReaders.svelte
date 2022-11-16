<script>
  export let renderAs = 'span'
</script>

<svelte:element this={renderAs} aria-hidden='true' class='hidden-from-screen-readers'>
  <slot />
</svelte:element>