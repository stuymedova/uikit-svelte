<script>
  export let condition = true
  export let htmlTag = 'div'

  export let action = () => {}
  export let actionParameters = undefined
</script>


{#if condition}
  <svelte:element 
    this={htmlTag} 
    {...$$restProps} 
    use:action={actionParameters} 
    on:pressOutside
    on:pressAndHold
  >
    <slot />
  </svelte:element>
{:else}
  <slot />
{/if}