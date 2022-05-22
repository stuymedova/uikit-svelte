<script>
  // TODO: additional support for anchor links
  // TODO: handle the case when link is wrapped around a DOM node

  export let label = 'Label'
  export let destination = ''
  export let shouldBeOpenedInNewTab = false

  let ref = null
</script>


<a
  bind:this={ref}
  class='link'
  href={destination}
  target={shouldBeOpenedInNewTab ? '_blank' : undefined}
  rel={shouldBeOpenedInNewTab ? 'noopener noreferrer' : undefined}
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