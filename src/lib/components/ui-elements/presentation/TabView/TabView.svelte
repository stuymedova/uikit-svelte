<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  export let orientation = 'horizontal' // Options: horizontal/vertical
  
  let focusedTabIndex = writable(selectedIndex)
  let selectedTabIndex = writable(selectedIndex) // Selected Tab is one that is focused and not disabled
  let tabs = []
  let tabContents = []
  let tabIndexesIterator = -1
  let tabContentsIndexesIterator = -1

  $: selectedIndex = $selectedTabIndex

  setContext('TabView', {
    orientation,
    focusedTabIndex,
    selectedTabIndex,
    setTabIndex: () => {
      tabIndexesIterator += 1
      return tabIndexesIterator
    },
    setTabContentIndex: () => {
      tabContentsIndexesIterator += 1
      return tabContentsIndexesIterator
    },
    addTab: ({ index, isDisabled }) => {
      if (index === $selectedTabIndex && isDisabled) {
        console.warn('Tab View: Avoid initially selecting a disabled Tab.')
      }

      tabs = [...tabs, { index, isDisabled }]
    },
    addTabContent: ({ index }) => {
      tabContents = [...tabContents, { index }]
    },
    setSelected: (nextIndex) => {
      if (nextIndex >= 0 && nextIndex < tabs.length) {
        $focusedTabIndex = nextIndex

        if (!tabs[nextIndex].isDisabled) {
          $selectedTabIndex = $focusedTabIndex
        }
      }
    }
  })

  onMount(() => {
    if (tabs.length < 2) {
      console.warn('Tab View: For the component to function correctly, provide two or more Tabs.')
    }

    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      console.error(`Tab View: Accepted orientation types are "horizontal" and "vertical". Provided "${orientation}".`)
    }
  })
</script>


<div 
  class='tab-view' 
  role='tablist'
  aria-orientation={orientation}
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