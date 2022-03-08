<script>
  export let label = 'Button'
  export let appearance = 'gray' // Options: gray/plain/contoured/filled
  export let purpose = undefined // Options: -/destructive
  export let behaviour = 'push' // Options: push/toggle (Extending: pop-up/pull-down)
  export let isSelected = false // Used only if button behaviour is set to "toggle"
  export let isDisabled = false
</script>


<button
  class='button{isDisabled ? " disabled" : ""}'
  appearance={appearance}
  purpose={purpose}
  behaviour={behaviour}
  aria-selected={behaviour === 'toggle' ? (isSelected && !isDisabled) : undefined}
  aria-disabled={isDisabled}
  {...$$restProps}
  on:click|preventDefault={() => {
    if (behaviour === 'toggle' && !isDisabled) {
      isSelected = !isSelected
    }
  }}
  on:click
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