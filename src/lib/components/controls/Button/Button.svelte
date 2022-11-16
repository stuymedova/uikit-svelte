<script>
  import { onMount } from 'svelte'
  import { PopoverAnchor, Popover } from '$lib'

  export let label = 'Label'
  // export let appearance = 'gray' // Options: gray/… (Extend: plain/contoured/filled) // TODO: accent/vibrant/call-to-action button — ?
  export let behaviour = 'push' // Options: push/switch/popover
  export let isDisabled = false
  export let isSelected = undefined // Provided for external use
  export let a11yLabel = undefined // Provided for external use
  export let generateClassNamesFrom = ''
  
  // Push button
  export let purpose = undefined // Options: -/primary/cancel/destructive // TODO: implement and test in a dialog component
  
  // Switch button
  export let isOn = false
  
  // Popover button
  export let generateIdsFrom = ''
  export let isExpanded = false
  export let attachmentSide = 'bottom' // Options: top/right/bottom/left
  export let attachmentAlignment = 'start' // Options: start/middle/end
  export let hasArrow = false
  export let shouldCloseOnPressOutside = true

  export let buttonRef = null

  onMount(() => {
    if (behaviour === 'popover' && generateIdsFrom === '') {
      console.warn('Popover Button: Property "generateIdsFrom" is empty. Provide a String that would be used to generate ids and aria-controls/aria-labelledby attributes.')
    }
  })
</script>


<!-- 
  Used by components that build on top of the Button component (ex. Segmented Control).
  Adds getters and setters for the component's props.
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

<PopoverAnchor 
  predicate={behaviour === 'popover'} 
  generateIdsFrom={generateIdsFrom}
  generateClassNamesFrom={generateClassNamesFrom}
  bind:isPopoverDisplayed={isExpanded}
  attachmentSide={attachmentSide}
  attachmentAlignment={attachmentAlignment}
  hasArrow={hasArrow}
  shouldCloseOnPressOutside={shouldCloseOnPressOutside}
>
  <button
    bind:this={buttonRef}
    id={
      (behaviour === 'popover' && generateIdsFrom !== '') ? generateIdsFrom + '--trigger' : $$restProps.id}
    class='{generateClassNamesFrom ? `${generateClassNamesFrom}-` : ''}button'
    type='button'
    data-behaviour={behaviour}
    data-purpose={behaviour === 'push' ? purpose : undefined}
    data-attachment-side={behaviour === 'popover' ? attachmentSide : undefined}
    data-attachment-alignment={behaviour === 'popover' ? attachmentAlignment : undefined}
    aria-pressed={behaviour === 'switch' ? isOn : undefined}
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
    on:focus
    on:keydown
    on:mouseover
  >
    <slot>{label}</slot>
  </button>
  
  {#if behaviour === 'popover'}
    <Popover
      id={generateIdsFrom !== '' ? generateIdsFrom : undefined}
      aria-labelledby={generateIdsFrom !== '' ? generateIdsFrom + '--trigger' : undefined}
    >
      <slot name='popover' />
    </Popover>
  {/if}
</PopoverAnchor>