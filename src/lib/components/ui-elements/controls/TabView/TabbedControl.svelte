<script>
  import { getContext } from 'svelte'
  import { SegmentedControl } from '$lib'

  const context = getContext('TabView')
  let selectedTabIndex = context.selectedTabIndex
  let orientation = context.orientation

  $: context.setSelected($selectedTabIndex)
</script>


<SegmentedControl
  bind:selectedIndex={$selectedTabIndex}
  orientation={orientation}
  class='tab-list'
  role='tablist'
>
  <slot />
</SegmentedControl>