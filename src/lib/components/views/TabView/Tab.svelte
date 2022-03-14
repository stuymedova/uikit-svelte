<script>
  import { getContext, onMount } from 'svelte'

  export let id = ''
  export let label = 'Tab'
  export let controls = ''
  export let isDisabled = false

  let ref = null

  const ctx = getContext('TabView')
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
  id={id !== '' 
    ? id 
    : console.warn('TabView -> Tab: Property "id" is empty. Provide a unique non-empty id.')} 
  class='tab'
  type='button'
  role='tab'
  aria-selected={isSelected && !isDisabled}
  aria-controls={controls === '' ? undefined : controls}
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
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      ctx.setSelected(index + 1)
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      ctx.setSelected(index - 1)
    }
  }}'
>
  <slot>{label}</slot>
</button>