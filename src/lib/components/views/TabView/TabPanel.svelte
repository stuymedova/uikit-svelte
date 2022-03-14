<script>
  import { getContext, onMount } from 'svelte'

  export let id = '';
  export let labelledBy = ''

  const ctx = getContext('TabView')
  const index = ctx.setTabPanelIndex()
  const selectedTabIndex = ctx.selectedTabIndex

  $: isSelected = $selectedTabIndex === index
</script>


<!-- TODO: aria-labelledby "needs to be provided" accessibility warning -->
<div
  id={id}
  class='tab-panel'
  role='tabpanel'
  aria-labelledby={labelledBy === '' ? undefined : labelledBy}
  tabindex={isSelected ? '0' : '-1'}
  style={isSelected ? undefined : 'display: none'}
  {...$$restProps}
  on:click
  on:mouseover
  on:focus
  on:mouseout
  on:blur
  on:mouseenter
  on:mouseleave
>
  <slot/>
</div>