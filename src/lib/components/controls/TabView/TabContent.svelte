<script>
  import { getContext } from 'svelte'

  const context = getContext('TabView')
  const index = context.setTabContentIndex()
  const selectedTabIndex = context.selectedTabIndex
  const generateIdsFrom = context.generateIdsFrom
  const generateClassNamesFrom = context.generateClassNamesFrom
  
  $: isSelected = $selectedTabIndex === index
  
  context.addTabContent(index)
</script>


<div 
  id={
    ($$restProps.id) ? $$restProps.id :
    (generateIdsFrom !== '') ? `${generateIdsFrom}-item-${index}`: undefined}
  class='{generateClassNamesFrom}-tab-content'
  class:selected={isSelected}
  role='tabpanel'
  aria-labelledby={
    ($$restProps["aria-labelledby"]) ? $$restProps["aria-labelledby"] :
    (generateIdsFrom !== '') ? `${generateIdsFrom}-item-${index}--trigger` : undefined}
  tabindex={isSelected ? '0' : '-1'}
  style='opacity: {isSelected ? '1' : '0'}'
  {...$$restProps}
>
  <slot />
</div>