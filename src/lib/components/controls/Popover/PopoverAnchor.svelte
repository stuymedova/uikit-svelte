<script context='module'>
  export const PopoverAnchor = {}
</script>

<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { ConditionalWrapper } from '$lib'
  import { pressOutside } from '$lib'

  export let predicate = true
  export let htmlTag = 'div'

  export let isPopoverDisplayed = false
  export let generateIdsFrom = '' // TODO: generate ids automatically
  export let generateClassNamesFrom = ''
  export let attachmentSide = 'bottom' // Options: top/right/bottom/left
  export let attachmentAlignment = 'start' // Options: start/middle/end
  export let hasArrow = false
  export let shouldCloseOnPressOutside = true

  const isDisplayed = writable(isPopoverDisplayed)
  $: $isDisplayed = isPopoverDisplayed

  setContext(PopoverAnchor, {
    isDisplayed,
    generateIdsFrom,
    generateClassNamesFrom,
    hasArrow
  })
</script>


<!-- Closes the popover when the Escape key is pressed -->
<svelte:window
  on:keydown='{({ key }) => {
    if (isPopoverDisplayed && key === 'Escape') {
      isPopoverDisplayed = false
    }
  }}'
/>

<ConditionalWrapper 
  class='{generateClassNamesFrom !== '' ? `${generateClassNamesFrom}-` : ''}popover-anchor'
  predicate={predicate} 
  htmlTag={htmlTag}
  actions={[{ action: pressOutside }]}
  data-attachment-side={attachmentSide}
  data-attachment-alignment={attachmentAlignment}
  {...$$restProps}
  on:pressOutside={() => {
    if (shouldCloseOnPressOutside && isPopoverDisplayed) {
      isPopoverDisplayed = false
    }
  }}
>
  <slot />
</ConditionalWrapper>