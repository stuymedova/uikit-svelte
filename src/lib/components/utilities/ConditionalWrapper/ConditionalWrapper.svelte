<script>
  export let condition = true
  export let htmlTag = 'div'

  export let action = () => {}
  export let actionParams = undefined
</script>


<!-- TODO: handle the case when there is no custom action -->
{#if condition}
  <svelte:element this={htmlTag} {...$$restProps} use:action={actionParams} on:clickAway>
    <slot />
  </svelte:element>
{:else}
  <slot />
{/if}