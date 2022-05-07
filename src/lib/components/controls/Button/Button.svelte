<script>
  import { ConditionalWrapper } from '$lib'
  import { clickAway } from '$lib'

  // TODO: use with SVGs
  // TODO: for clarity, divide into common and behaviour-specific
  // TODO: for popover buttons, add variations by side (top, left, bottom, right) and alignment (start, end, center)
  // TODO: popup/pulldown functionality — ? 

  export let label = 'Label'
  export let id = '' // TODO: make sure id is provided before adding it
  export let appearance = 'gray' // Options: gray/… (Extend: plain/contoured/filled)
  export let action = undefined // Options: -/primary/cancel/destructive
  export let behaviour = 'push' // Options: push/switch/popover
  export let isOn = false // Used only if button behaviour is set to "switch"
  export let isExpanded = false // Used only if button behaviour is set to "popover"
  export let closeWhenInteractOutside = true // Used only if button behaviour is set to "popover"
  export let isDisabled = false

  let ref = null
</script>


<svelte:window
  on:keydown='{({ key }) => {
    if (behaviour === 'popover' && isExpanded && key === 'Escape') {
      isExpanded = false
    }
  }}'
/>

<ConditionalWrapper 
  condition={behaviour === 'popover'} 
  action={clickAway}
  on:clickAway={() => {
    if (closeWhenInteractOutside && isExpanded) {
      isExpanded = false
    }
  }}
  class='popover-button-wrapper'
>
  <button
    bind:this={ref}
    class='button'
    type='button'
    role={behaviour === 'switch' ? 'switch' : undefined}
    appearance={appearance}
    action={action}
    behaviour={behaviour}
    aria-checked={behaviour === 'switch' ? isOn : undefined}
    aria-haspopup={behaviour === 'popover' ? true : undefined}
    aria-expanded={behaviour === 'popover' ? isExpanded : undefined}
    aria-controls={behaviour === 'popover' ? id : undefined}
    aria-disabled={isDisabled}
    {...$$restProps}
    on:click
    on:click|preventDefault={() => {
      if (behaviour === 'switch' && !isDisabled) {
        isOn = !isOn
      } else if (behaviour === 'popover' && !isDisabled) {
        isExpanded = !isExpanded
      }
      ref.focus()
    }}
  >
    <slot>{label}</slot>
  </button>

  <!-- TODO: add animation -->
  {#if behaviour === 'popover'}
    <aside 
      id={id}
      class='button-popover' 
      style='display: {isExpanded ? "block" : "none"}'>
      <slot name='popover'>{label}</slot>
    </aside>
  {/if}
</ConditionalWrapper>