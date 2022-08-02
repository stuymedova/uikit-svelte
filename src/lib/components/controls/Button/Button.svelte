<script>
  import { onMount } from 'svelte'
  import { ConditionalWrapper } from '$lib'
  import { pressOutside } from '$lib'

  export let label = 'Label'
  // export let appearance = 'gray' // Options: gray/… (Extend: plain/contoured/filled) // TODO: accent/vibrant/call-to-action button — ?
  export let behaviour = 'push' // Options: push/switch/popover
  export let isDisabled = false
  export let isSelected = undefined // Provided for external use
  export let a11yLabel = undefined // Provided for external use
  
  // Push button
  export let purpose = undefined // Options: -/primary/cancel/destructive // TODO: implement and test in a dialog component
  
  // Switch button
  export let isOn = false
  
  // Popover button
  export let generateIdsFrom = ''
  export let isExpanded = false
  export let attachmentAnchor = 'bottom' // Options: top/right/bottom/left
  export let attachmentAlignment = 'start' // Options: start/middle/end
  export let shouldDrawCaret = false
  export let shouldCloseOnPressOutside = true

  export let buttonRef = null

  onMount(() => {
    if (behaviour === 'popover' && generateIdsFrom === '') {
      console.warn('Popover Button: Property "generateIdsFrom" is empty. Provide a String that would be used to generate ids and aria-controls/aria-labelledby attributes.')
    }
  })
</script>


<!-- 
  Adds getters and setters for the component's props 
-->
<svelte:options accessors={true} />

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

<ConditionalWrapper 
  class='popover-button-wrapper'
  predicate={behaviour === 'popover'} 
  useActions={[{ action: pressOutside }]}
  on:pressOutside={() => {
    if (shouldCloseOnPressOutside && isExpanded) {
      isExpanded = false
    }
  }}
>
  <!-- TODO: add data prefix (purpose -> data-purpose)? -->
  <button
    bind:this={buttonRef}
    id={
      (behaviour === 'popover' && generateIdsFrom !== '') ? generateIdsFrom + '--trigger' : $$restProps.id}
    class='button'
    type='button'
    data-behaviour={behaviour}
    data-purpose={behaviour === 'push' ? purpose : undefined}
    role={behaviour === 'switch' ? 'switch' : undefined}
    data-attachment-anchor={behaviour === 'popover' ? attachmentAnchor : undefined}
    data-attachment-alignment={behaviour === 'popover' ? attachmentAlignment : undefined}
    aria-checked={behaviour === 'switch' ? isOn : undefined}
    aria-haspopup={behaviour === 'popover' ? true : undefined}
    aria-expanded={behaviour === 'popover' ? isExpanded : undefined}
    aria-controls={(behaviour === 'popover' && generateIdsFrom !== '') ? generateIdsFrom : undefined}
    aria-disabled={isDisabled}
    aria-selected={isSelected}
    aria-label={a11yLabel}
    {...$$restProps}
    on:click
    on:click|preventDefault={() => {
      if (behaviour === 'switch' && !isDisabled) {
        isOn = !isOn
      } else if (behaviour === 'popover' && !isDisabled) {
        isExpanded = !isExpanded
      }
      buttonRef.focus()
    }}
    on:keydown
  >
    <slot>{label}</slot>
  </button>
  
  <!-- 
    TODO: add fade in/out animation 
    Idea: If animation passed, play it on next tick
  -->
  {#if behaviour === 'popover'}
    {#if shouldDrawCaret}
      <span 
        class='button-popover-caret'
        style='display: {isExpanded ? "block" : "none"}'
      ></span>
    {/if}
    <aside 
      id={generateIdsFrom !== '' ? generateIdsFrom : undefined}
      class='button-popover'
      aria-labelledby={generateIdsFrom !== '' ? generateIdsFrom + '--trigger' : undefined}
      style='display: {isExpanded ? "block" : "none"}'
    >
      <slot name='popover'>{label}</slot>
    </aside>
  {/if}
</ConditionalWrapper>