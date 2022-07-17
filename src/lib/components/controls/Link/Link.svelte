<script>
  // TODO: additional support for anchor links
  // TODO: add support for download links, make it intuitive 
  // to specify a link's role

  export let label = 'Label'
  export let destination = ''
  export let shouldBeOpenedInNewTab = false
  export let isInline = true
  
  let ref = null
</script>


<a
  bind:this={ref}
  class='link'
  href={destination}
  target={shouldBeOpenedInNewTab ? '_blank' : undefined}
  rel={shouldBeOpenedInNewTab ? 'noopener noreferrer' : undefined}
  data-is-inline={isInline}
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