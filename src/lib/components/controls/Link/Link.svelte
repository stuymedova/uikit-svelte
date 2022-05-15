<script>
  // TODO: support anchor links
  export let label = 'Label'
  export let destination = ''
  export let openInNewTab = false

  let ref = null
</script>


<a
  bind:this={ref}
  class='link'
  href={destination}
  target={openInNewTab ? '_blank' : undefined}
  rel={openInNewTab ? 'noopener noreferrer' : undefined}
  on:click
  on:click={() => {
    ref.focus()
  }}
  on:mouseover
  on:focus
  on:mouseout
  on:blur
  on:mouseenter
  on:mouseleave
  on:keydown
>
  <slot>{label}</slot>
</a>