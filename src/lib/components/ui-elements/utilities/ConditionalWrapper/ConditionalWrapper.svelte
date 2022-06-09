<script>
  import { Wrapper } from '$lib'

  export let predicate = true
</script>


{#if predicate}
  <Wrapper 
    {...$$restProps}
    on:longPress
    on:pressOutside
  >
    <slot />
  </Wrapper>
{:else}
  <slot />
{/if}