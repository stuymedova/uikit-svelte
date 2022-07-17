<script>
  import { getContext } from 'svelte'

  const context = getContext('TabView')
  const index = context.setTabContentIndex()
  const selectedTabIndex = context.selectedTabIndex
  const topLevelClassName = context.topLevelClassName
  
  $: isSelected = $selectedTabIndex === index
  
  context.addTabContent({ index })
</script>


<div 
  class='{topLevelClassName}-tab-content'
  class:selected={isSelected}
  role='tabpanel'
  aria-labelledby=''
  tabindex={isSelected ? '0' : '-1'}
  style='opacity: {isSelected ? '1' : '0'}'
  {...$$restProps}
>
  <slot />
</div>