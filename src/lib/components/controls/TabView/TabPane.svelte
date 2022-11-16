<script>
  import { getContext, onMount } from 'svelte'
  import { TabView } from './TabView.svelte'

  let tabPaneRef = null
  let width = 0
  let height = 0

  const context = getContext(TabView)
  const index = context.setTabPaneIndex()
  const selectedTabIndex = context.selectedTabIndex
  const generateIdsFrom = context.generateIdsFrom
  const generateClassNamesFrom = context.generateClassNamesFrom
  
  $: isSelected = $selectedTabIndex === index
  
  onMount(() => {
    // TODO: account for resize (what if width is set to a relative value such as 100vw)
    width = parseInt(window.getComputedStyle(tabPaneRef).width)
    height = parseInt(window.getComputedStyle(tabPaneRef).height)

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
  aria-hidden={isSelected ? undefined : true}
  {...$$restProps}
>
  <slot />
</div>