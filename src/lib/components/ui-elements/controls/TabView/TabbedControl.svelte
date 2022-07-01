<script>
  import { getContext } from 'svelte'
  import { SegmentedControl } from '$lib'

  export let orientation = 'horizontal' // Options: horizontal/vertical
  export let isBackgroundAnimated = false

  const context = getContext('TabView')
  const selectedTabIndex = context.selectedTabIndex

  $: context.setSelected($selectedTabIndex)
</script>


<SegmentedControl
  bind:selectedIndex={$selectedTabIndex}
  topLevelClassName='tabbed-control'
  orientation={orientation}
  isBackgroundAnimated={isBackgroundAnimated}
  role='tablist'
>
  <slot />
</SegmentedControl>