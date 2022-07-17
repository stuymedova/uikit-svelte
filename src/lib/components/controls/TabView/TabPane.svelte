<script>
  import { getContext } from 'svelte'

  const context = getContext('TabView')
  const topLevelClassName = context.topLevelClassName
</script>


<div class='{topLevelClassName}-tab-pane'>
  <slot />
</div>