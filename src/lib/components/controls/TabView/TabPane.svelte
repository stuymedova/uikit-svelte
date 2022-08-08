<script>
  import { getContext, onMount } from 'svelte'

  let tabPaneRef = null
  let width = 0
  let height = 0

  const context = getContext('TabView')
  const index = context.setTabPaneIndex()
  const selectedTabIndex = context.selectedTabIndex
  const generateIdsFrom = context.generateIdsFrom
  const generateClassNamesFrom = context.generateClassNamesFrom
  
  $: isSelected = $selectedTabIndex === index
  
  onMount(() => {
    width = Math.round(tabPaneRef.clientWidth)
    height = Math.round(tabPaneRef.clientHeight)

    context.addTabPane(index, width, height)
  })
</script>


<div 
  bind:this={tabPaneRef}
  id={
    ($$restProps.id) ? $$restProps.id :
    (generateIdsFrom !== '') ? `${generateIdsFrom}-item-${index}`: undefined}
  class='{generateClassNamesFrom}-tab-pane'
  class:selected={isSelected}
  role='tabpanel'
  aria-labelledby={
    ($$restProps["aria-labelledby"]) ? $$restProps["aria-labelledby"] :
    (generateIdsFrom !== '') ? `${generateIdsFrom}-item-${index}--trigger` : undefined}
  tabindex={isSelected ? '0' : '-1'}
  {...$$restProps}
>
  <slot />
</div>