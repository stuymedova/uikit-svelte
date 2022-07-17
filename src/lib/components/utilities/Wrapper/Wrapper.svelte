<script>
  import { componentActions } from '$lib'

  export let htmlTag = 'div'
  export let useActions = null
</script>


<svelte:element 
  this={htmlTag}
  class='wrapper'
  use:componentActions={useActions}
  {...$$restProps}
  on:longPress
  on:pressOutside
>
  <slot />
</svelte:element>