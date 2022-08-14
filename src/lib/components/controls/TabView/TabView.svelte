<script context='module'>
	export const TabView = {}
</script>

<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  export let generateIdsFrom = ''
  export let generateClassNamesFrom = 'tab-view'
  export let controlPosition = 'top' // Options: top/left/bottom/right

  let selectedTabIndex = writable(selectedIndex)
  let tabPanes = []
  let tabIndexesIterator = -1
  let tabPaneIndexesIterator = -1
  let tabContentWidth = writable(0)
  let tabContentHeight = writable(0)
  
  $: selectedIndex = $selectedTabIndex

  setContext(TabView, {
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

    if (generateIdsFrom === '') {
      console.warn(`TabView: Provide value to the "generateIdsFrom" property. The "generateIdsFrom" property is used to assign an id to each Tab and Tab Content component, as well as their "aria-controls" and "aria-labelledby" attributes.`)
    }
  })
</script>


<div 
  class='tab-view' 
  role='tablist' 
  data-control-position={controlPosition}
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