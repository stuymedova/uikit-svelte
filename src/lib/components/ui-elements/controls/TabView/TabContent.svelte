<script>
  import { getContext } from 'svelte'

  const context = getContext('TabView')
  const index = context.setTabContentIndex()
  const selectedTabIndex = context.selectedTabIndex
  
  $: isSelected = $selectedTabIndex === index
  
  context.addTabContent({ index })
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