<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let label = ''
  export let selectedIndex = 0
  // export let activation = 'automatic' // [TODO] Options: manual/automatic

  let focusedTabIndex = writable(selectedIndex)
  let selectedTabIndex = writable(selectedIndex) // Selected Tab is one that is focused and not disabled
  let tabs = []
  let tabIndexesIterator = -1
  let tabPanelIndexesIterator = -1

  $: selectedIndex = $selectedTabIndex

  setContext('TabView', {
    focusedTabIndex,
    selectedTabIndex,
    setTabIndex: () => {
      tabIndexesIterator += 1
      return tabIndexesIterator
    },
    setTabPanelIndex: () => {
      tabPanelIndexesIterator += 1
      return tabPanelIndexesIterator
    },
    addTab: ({ index, isDisabled }) => {
      if (index === $selectedTabIndex) {
        if (isDisabled) {
          console.warn('Tab View: Avoid initially selecting a disabled Tab.')
        }
      }
      tabs = [...tabs, { index, isDisabled }]
    },
    setSelected: (nextIndex) => {
      if (nextIndex === -1) nextIndex = tabs.length - 1
      else if (nextIndex === tabs.length) nextIndex = 0

      $focusedTabIndex = nextIndex

      if (!tabs[nextIndex].isDisabled) {
        $selectedTabIndex = $focusedTabIndex
      }
    }
  })

  onMount(() => {
    if (tabs.length < 2) {
      console.warn('Tab View: For the component to function correctly, provide two or more Tabs.')
    }
  })
</script>


<div
  class='tab-view' 
  role='tablist'
  aria-label={label === '' ? undefined : label}
  {...$$restProps}
  on:click
  on:mouseover
  on:focus
  on:mouseout
  on:blur
  on:mouseenter
  on:mouseleave
>
  <slot />
</div>