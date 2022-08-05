<script>
  import { getContext, onMount } from 'svelte'
  import { Button } from '$lib'

  export let label = 'Label'
  export let isDisabled = false

  let segmentRef = null
  let length = 0
  let offset = 0

  const context = getContext('SegmentedControl')
  const index = context.setIndex()
  const focusedSegmentIndex = context.focusedSegmentIndex
  const selectedSegmentIndex = context.selectedSegmentIndex
  const orientation = context.orientation
  const generateClassNamesFrom = context.generateClassNamesFrom
  const isBackgroundAnimated = context.isBackgroundAnimated
  
  $: isFocused = $focusedSegmentIndex === index
  $: if (isFocused) { segmentRef?.buttonRef.focus() }
  $: isSelected = $selectedSegmentIndex === index

  if (!isBackgroundAnimated) {
    context.addSegment(index, isDisabled)
  }

  onMount(() => {
    if (isBackgroundAnimated) {
      if (orientation === 'horizontal') {
        length = Math.round(segmentRef?.buttonRef.clientWidth) 
        offset = Math.round(segmentRef?.buttonRef.offsetLeft) 
      } else if (orientation === 'vertical') {
        length = Math.round(segmentRef?.buttonRef.clientHeight) 
        offset = Math.round(segmentRef?.buttonRef.offsetTop) 
      }

      context.addSegment(index, isDisabled, length, offset)
    }
  })
</script>


<Button
  bind:this={segmentRef}
  class='button {generateClassNamesFrom}-item'
  role='tab'
  isSelected={isSelected}
  isDisabled={isDisabled}
  tabindex={isSelected ? '0' : '-1'}
  {...$$restProps}
  on:click
  on:click={() => { 
    if (index !== $selectedSegmentIndex && !isDisabled) {
      context.setSelected(index)
    }
  }}
  on:keydown
  on:keydown='{({ key }) => {
    if (orientation === 'horizontal' && key === 'ArrowRight' || 
        orientation === 'vertical' && key === 'ArrowDown') {
      context.setSelected(index + 1)
    } else if (
        orientation === 'horizontal' && key === 'ArrowLeft' || 
        orientation === 'vertical' && key === 'ArrowUp') {
      context.setSelected(index - 1)
    }
  }}'
>
  <slot>{label}</slot>
</Button>