<script>
  // TODO: scale symbols (small, medium, and large), and align them with text
  // TODO: account for dark mode
  export let symbol = null
</script>


{#if symbol}
  <span 
    class='symbol'
    {...$$restProps}
  >
    <svelte:component this={symbol} />
  </span>
{/if}