<script>
  import { getContext } from 'svelte'
  import { SegmentedControl } from '$lib'

  export let orientation = 'horizontal' // Options: horizontal/vertical
  export let isBackgroundAnimated = false

  const context = getContext('TabView')
  const selectedTabIndex = context.selectedTabIndex
  const topLevelClassName = context.topLevelClassName

  $: context.setSelected($selectedTabIndex)
</script>


<SegmentedControl
  bind:selectedIndex={$selectedTabIndex}
  orientation={orientation}
  topLevelClassName='{topLevelClassName}-tabbed-control'
  isBackgroundAnimated={isBackgroundAnimated}
>
  <slot />
</SegmentedControl>