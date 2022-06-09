<script>
  import { actionsToApply } from '$lib'

  export let htmlTag = 'div'
  export let actions = null
</script>


<svelte:element 
  this={htmlTag}
  class='wrapper'
  use:actionsToApply={actions}
  {...$$restProps}
  on:longPress
  on:pressOutside
>
  <slot />
</svelte:element>