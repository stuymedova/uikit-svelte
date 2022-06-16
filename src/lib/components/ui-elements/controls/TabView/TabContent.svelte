<script>
  import { getContext, onMount } from 'svelte'

  const ctx = getContext('TabView')
  const index = ctx.setTabContentIndex()
  const selectedTabIndex = ctx.selectedTabIndex
  
  $: isSelected = $selectedTabIndex === index
  
  onMount(() => {
    ctx.addTabContent({ index })
  })
</script>


<div 
  class='tab-content'
  class:selected={isSelected}
  role='tabpanel'
  aria-labelledby=''
  tabindex={isSelected ? '0' : '-1'}
  style='opacity: {isSelected ? '1' : '0'}'
  {...$$restProps}
>
  <slot />
</div>