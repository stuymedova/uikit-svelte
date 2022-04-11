<script>
  import { getContext, onMount } from 'svelte'

  export let label = 'Label'
  export let isDisabled = false

  let ref = null
  let width = 0
  let offset = 0

  const ctx = getContext('SegmentedControl')
  const index = ctx.setIndex()
  const focusedSegmentIndex = ctx.focusedSegmentIndex
  const selectedSegmentIndex = ctx.selectedSegmentIndex
  
  $: isFocused = $focusedSegmentIndex === index
  $: if (isFocused) { ref?.focus() }
  $: isSelected = $selectedSegmentIndex === index
  
  onMount(() => {
    width = Math.round(ref.clientWidth)
    offset = Math.round(ref.offsetLeft)
    ctx.addSegment({ index, isDisabled, width, offset })
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
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      ctx.setSelected(index + 1)
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      ctx.setSelected(index - 1)
    }
  }}'
>
  <slot>{label}</slot>
</button>