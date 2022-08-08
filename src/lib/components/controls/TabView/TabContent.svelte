<script>
  import { getContext } from 'svelte'

  const context = getContext('TabView')
  const generateClassNamesFrom = context.generateClassNamesFrom
  const width = context.tabContentWidth
  const height = context.tabContentHeight
</script>


<div class='{generateClassNamesFrom}-tab-content' style='width: {$width}px; height:{$height}px'>
  <slot />
</div>