<script>
  import { getContext } from 'svelte'
  import { SegmentedControl } from '$lib'

  export let position = 'top' // Options: top/left/bottom/right
  export let orientation = 'horizontal' // Options: horizontal/vertical
  export let isBackgroundAnimated = false

  const context = getContext('TabView')
  const selectedTabIndex = context.selectedTabIndex
  const generateClassNamesFrom = context.generateClassNamesFrom

  $: context.setSelected($selectedTabIndex)
</script>


<SegmentedControl
  bind:selectedIndex={$selectedTabIndex}
  data-position={position}
  orientation={orientation}
  generateClassNamesFrom='{generateClassNamesFrom}-tabbed-control'
  isBackgroundAnimated={isBackgroundAnimated}
>
  <slot />
</SegmentedControl>