<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  export let topLevelClassName = 'tab-view'
  export let generateIdsFrom = ''

  let selectedTabIndex = writable(selectedIndex) // Needs to be a store in order for a child to update it
  let tabContents = []
  let tabIndexesIterator = -1
  let tabContentsIndexesIterator = -1

  setContext('TabView', {
    selectedTabIndex,
    topLevelClassName,
    generateIdsFrom,
    setTabIndex: () => {
      tabIndexesIterator += 1
      return tabIndexesIterator
    },
    setTabContentIndex: () => {
      tabContentsIndexesIterator += 1
      return tabContentsIndexesIterator
    },
    addTabContent: (index) => {
      tabContents = [...tabContents, index]
    },
    setSelected: (tabIndex) => {
      $selectedTabIndex = tabIndex
    }
  })

  onMount(() => {
    if (selectedIndex < 0 || selectedIndex >= tabContents.length) {
      console.warn(`Segmented Control: Provided "selectedIndex" value is out of range. Value should be greater than or equal to 0, and less than ${segments.length}, provided ${selectedIndex}.`)
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