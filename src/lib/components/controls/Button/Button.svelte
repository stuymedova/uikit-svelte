<script>
  export let label = 'Button'
  export let appearance = 'gray' // Options: gray/plain/contoured/filled
  export let action = undefined // Options: -/primary/cancel/destructive
  export let behaviour = 'push' // Options: push/toggle (Extending: pop-up/pull-down)
  export let isOn = false // Used only if button behaviour is set to "toggle"
  export let isDisabled = false

  let ref = null
</script>


<button
  bind:this={ref}
  class='button'
  appearance={appearance}
  action={action}
  behaviour={behaviour}
  aria-selected={behaviour === 'toggle' ? (isOn && !isDisabled) : undefined}
  aria-disabled={isDisabled}
  {...$$restProps}
  on:click
  on:click|preventDefault={() => {
    if (behaviour === 'toggle' && !isDisabled) {
      isOn = !isOn
    }
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
</button>