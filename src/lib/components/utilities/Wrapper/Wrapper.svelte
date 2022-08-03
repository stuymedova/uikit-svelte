<script>
  import { applyActionsToComponent } from '$lib'

  export let htmlTag = 'div'
  export let actions = null
</script>


<svelte:element 
  this={htmlTag}
  class='wrapper'
  use:applyActionsToComponent={actions}
  {...$$restProps}
  on:longPress
  on:pressOutside
>
  <slot />
</svelte:element>