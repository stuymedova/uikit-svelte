<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  export let generateIdsFrom = '' // TODO: require this option to be specified, throw an error if not
  export let generateClassNamesFrom = 'tab-view'

  let selectedTabIndex = writable(selectedIndex) // Needs to be a store in order for a child to update it
  let tabPanes = []
  let tabIndexesIterator = -1
  let tabPaneIndexesIterator = -1
  let tabContentWidth = writable(0)
  let tabContentHeight = writable(0)
  
  $: selectedIndex = $selectedTabIndex

  setContext('TabView', {
    selectedTabIndex,
    generateIdsFrom,
    generateClassNamesFrom,
    tabContentWidth,
    tabContentHeight,
    setTabIndex: () => {
      tabIndexesIterator += 1
      return tabIndexesIterator
    },
    setTabPaneIndex: () => {
      tabPaneIndexesIterator += 1
      return tabPaneIndexesIterator
    },
    addTabPane: (index, width, height) => {
      if (index === $selectedTabIndex) {
        $tabContentWidth = width
        $tabContentHeight = height
      }
      
      tabPanes = [...tabPanes, { index, width, height }]
    },
    setSelected: (tabIndex) => {
      $selectedTabIndex = tabIndex

      $tabContentWidth = tabPanes[$selectedTabIndex]?.width
      $tabContentHeight = tabPanes[$selectedTabIndex]?.height
    }
  })

  onMount(() => {
    if (selectedIndex < 0 || selectedIndex >= tabPanes.length) {
      console.warn(`TabView: Provided "selectedIndex" value is out of range. Value should be greater than or equal to 0, and less than ${tabPanes.length}, provided ${selectedIndex}.`)
    }
  })
</script>


<div 
  class='tab-view' 
  role='tablist'
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:focus
  on:mouseout
  on:mouseleave
  on:blur
>
  <slot />
</div>