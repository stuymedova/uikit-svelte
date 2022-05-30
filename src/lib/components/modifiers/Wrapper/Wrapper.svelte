<script>
  // TODO: step away from "Conditional Wrapper" role, make it universal
  // so it can be used in various scenarios

  export let predicate = true
  export let htmlTag = 'div'

  export let action = () => {}
  export let actionParameters = undefined
</script>


{#if predicate}
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