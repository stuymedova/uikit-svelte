<script>
  import { getContext, onMount } from 'svelte'

  export let label = 'Label'
  export let isDisabled = false

  let ref = null
  let length = 0
  let offset = 0

  const ctx = getContext('SegmentedControl')
  const orientation = ctx.orientation
  const index = ctx.setIndex()
  const focusedSegmentIndex = ctx.focusedSegmentIndex
  const selectedSegmentIndex = ctx.selectedSegmentIndex
  
  $: isFocused = $focusedSegmentIndex === index
  $: if (isFocused) { ref?.focus() }
  $: isSelected = $selectedSegmentIndex === index
  
  onMount(() => {
    if (orientation === 'horizontal') {
      length = Math.round(ref.clientWidth) 
      offset = Math.round(ref.offsetLeft) 
    } else if (orientation === 'vertical') {
      length = Math.round(ref.clientHeight) 
      offset = Math.round(ref.offsetTop) 
    }
    
    ctx.addSegment({ index, isDisabled, length, offset })
  })
</script>


<button 
  bind:this={ref}
  class='segmented-control-item'
  type='button'
  role='tab'
  aria-selected={isSelected && !isDisabled}
  aria-disabled={isDisabled}
  tabindex={isSelected ? '0' : '-1'}
  {...$$restProps}
  on:click
  on:click|preventDefault={() => { 
    if (index !== $selectedSegmentIndex && !isDisabled) {
      ctx.setSelected(index)
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
</button>