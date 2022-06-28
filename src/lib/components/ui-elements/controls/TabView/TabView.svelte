<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0 // TODO: "value out of range" error if such passed

  // Needs to be a store in order for a child to update it
  let selectedTabIndex = writable(selectedIndex)
  let tabContents = []
  let tabContentsIndexesIterator = -1

  setContext('TabView', {
    selectedTabIndex,
    setTabContentIndex: () => {
      tabContentsIndexesIterator += 1
      return tabContentsIndexesIterator
    },
    addTabContent: ({ index }) => {
      tabContents = [...tabContents, { index }]
    },
    // Required in order for a child to update it
    setSelected: (tabIndex) => {
      $selectedTabIndex = tabIndex
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