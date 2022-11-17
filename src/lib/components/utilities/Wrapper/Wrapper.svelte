<script>
  import { applyAction, applyActions } from '$lib'

  export let renderAs = 'div'
  export let action = null
  export let actions = null
</script>


<svelte:element 
  this={renderAs}
  class='wrapper'
  use:applyAction={action}
  use:applyActions={actions}
  {...$$restProps}
  on:longPress
  on:pressOutside
>
  <slot />
</svelte:element>