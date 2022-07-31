<script>
  import { getContext } from 'svelte'

  export let id = ''

  const context = getContext('TabView')
  const index = context.setTabContentIndex()
  const selectedTabIndex = context.selectedTabIndex
  const topLevelClassName = context.topLevelClassName
  const generateIdsFromId = context.generateIdsFromId
  
  $: isSelected = $selectedTabIndex === index
  
  context.addTabContent(index)
</script>


<div 
  id={(generateIdsFromId !== '') ? `${generateIdsFromId}-item-${index}` : (id !== '') ? id : undefined}
  class='{topLevelClassName}-tab-content'
  class:selected={isSelected}
  role='tabpanel'
  aria-labelledby={(generateIdsFromId !== '') ? `${generateIdsFromId}-item-${index}--trigger` : ($$restProps["aria-labelledby"]) ? $$restProps["aria-labelledby"] : undefined}
  tabindex={isSelected ? '0' : '-1'}
  style='opacity: {isSelected ? '1' : '0'}'
  {...$$restProps}
>
  <slot />
</div>