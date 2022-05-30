<script>
  import { onMount } from 'svelte'
  import { Wrapper } from '$lib'
  import { pressOutside } from '$lib'

  // TODO: use with SVGs
  // TODO: for popover buttons, add variations by side (top, left, bottom, right) and alignment (start, end, center)
  // TODO: popup(https://w3c.github.io/aria-practices/#combobox)/pulldown functionality — ? 

  export let label = 'Label'
  // export let appearance = 'gray' // Options: gray/… (Extend: plain/contoured/filled) // TODO: accent/vibrant/call-to-action button — ?
  export let behaviour = 'push' // Options: push/switch/popover
  export let isDisabled = false
  
  // Push button
  export let purpose = undefined // Options: -/primary/cancel/destructive // TODO: test in a dialog component
  
  // Switch button
  export let isOn = false
  
  // Popover button
  export let id = ''
  export let isExpanded = false
  export let shouldCloseOnPressOutside = true

  let ref = null

  onMount(() => {
    if (behaviour === 'popover' && id === '') {
      console.warn('Popover Button: Property "id" is empty. Provide a unique non-empty id.')
    }
  })
</script>


<!-- 
  Used only if button behaviour is set to "popover". 
  Closes the popover when the Escape key is pressed.
-->
<svelte:window
  on:keydown='{({ key }) => {
    if (behaviour === 'popover' && isExpanded && key === 'Escape') {
      isExpanded = false
    }
  }}'
/>

<Wrapper 
  predicate={behaviour === 'popover'} 
  action={pressOutside}
  on:pressOutside={() => {
    if (shouldCloseOnPressOutside && isExpanded) {
      isExpanded = false
    }
  }}
  class='popover-button-wrapper'
>
  <button
    bind:this={ref}
    id={(behaviour === 'popover' && id !== '') ? id + '--trigger' : undefined}
    class='button'
    type='button'
    behaviour={behaviour}
    purpose={behaviour === 'push' ? purpose : undefined}
    role={behaviour === 'switch' ? 'switch' : undefined}
    aria-checked={behaviour === 'switch' ? isOn : undefined}
    aria-haspopup={behaviour === 'popover' ? true : undefined}
    aria-expanded={behaviour === 'popover' ? isExpanded : undefined}
    aria-controls={(behaviour === 'popover' && id !== '') ? id : undefined}
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

  <!-- 
    TODO: add fade in/out animation 
    Idea: If animation passed, play it on next tick
  -->
  {#if behaviour === 'popover'}
    <aside 
      id={(behaviour === 'popover' && id !== '') ? id : undefined}
      class='button-popover'
      aria-labelledby={(behaviour === 'popover' && id !== '') ? id + '--trigger' : undefined}
      style='display: {isExpanded ? "block" : "none"}'
    >
      <slot name='popover'>{label}</slot>
    </aside>
  {/if}
</Wrapper>