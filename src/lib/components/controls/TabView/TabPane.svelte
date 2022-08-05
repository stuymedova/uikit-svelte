<script>
  import { getContext } from 'svelte'

  const context = getContext('TabView')
  const generateClassNamesFrom = context.generateClassNamesFrom
</script>


<div class='{generateClassNamesFrom}-tab-pane'>
  <slot />
</div>