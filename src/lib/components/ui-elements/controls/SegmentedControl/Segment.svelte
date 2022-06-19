<script>
  import { getContext, onMount } from 'svelte'
  import { Button } from '$lib'

  export let label = 'Label'
  export let isDisabled = false

  let segmentRef = null
  let length = 0
  let offset = 0

  const ctx = getContext('SegmentedControl')
  const orientation = ctx.orientation
  const index = ctx.setIndex()
  const focusedSegmentIndex = ctx.focusedSegmentIndex
  const selectedSegmentIndex = ctx.selectedSegmentIndex
  
  $: isFocused = $focusedSegmentIndex === index
  $: if (isFocused) { segmentRef?.buttonRef.focus() }
  $: isSelected = $selectedSegmentIndex === index
  
  onMount(() => {
    if (orientation === 'horizontal') {
      length = Math.round(segmentRef?.buttonRef.clientWidth) 
      offset = Math.round(segmentRef?.buttonRef.offsetLeft) 
    } else if (orientation === 'vertical') {
      length = Math.round(segmentRef?.buttonRef.clientHeight) 
      offset = Math.round(segmentRef?.buttonRef.offsetTop) 
    }
    
    ctx.addSegment({ index, isDisabled, length, offset })
  })
</script>


<Button
  bind:this={segmentRef}
  class='segment'
  role='tab'
  isSelected={isSelected}
  isDisabled={isDisabled}
  tabindex={isSelected ? '0' : '-1'}
  {...$$restProps}
  on:click
  on:click={() => { 
    if (index !== $selectedSegmentIndex && !isDisabled) {
      ctx.setSelected(index)
    }
  }}
  on:keydown
  on:keydown='{({ key }) => {
    if (orientation === 'horizontal' && key === 'ArrowRight' || 
        orientation === 'vertical' && key === 'ArrowDown') {
      ctx.setSelected(index + 1)
    } else if (
        orientation === 'horizontal' && key === 'ArrowLeft' || 
        orientation === 'vertical' && key === 'ArrowUp') {
      ctx.setSelected(index - 1)
    }
  }}'
>
  <slot>{label}</slot>
</Button>