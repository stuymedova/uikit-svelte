<script>
  import { getContext, onMount } from 'svelte'

  export let label = 'Label'
  export let isDisabled = false

  let ref = null

  const ctx = getContext('TabView')
  const orientation = ctx.orientation
  const index = ctx.setTabIndex()
  const focusedTabIndex = ctx.focusedTabIndex
  const selectedTabIndex = ctx.selectedTabIndex
  
  $: isFocused = $focusedTabIndex === index
  $: if (isFocused) { ref?.focus() }
  $: isSelected = $selectedTabIndex === index
  
  onMount(() => {
    ctx.addTab({ index, isDisabled })
  })
</script>


<button 
  bind:this={ref}
  class='tab'
  type='button'
  role='tab'
  aria-selected={isSelected && !isDisabled}
  aria-controls=''
  aria-disabled={isDisabled}
  tabindex={isSelected ? '0' : '-1'}
  {...$$restProps}
  on:click
  on:click|preventDefault={() => { 
    if (index !== $selectedTabIndex && !isDisabled) {
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