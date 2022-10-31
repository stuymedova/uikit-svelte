<script>
  import { getContext } from 'svelte'
  import { PopoverAnchor } from './PopoverAnchor.svelte'

  export let content = ''
  
  const context = getContext(PopoverAnchor)
  const isPopoverDisplayed = context.isDisplayed
  // const generateIdsFrom = context.generateIdsFrom // TODO
  const generateClassNamesFrom = context.generateClassNamesFrom
  const hasArrow = context.hasArrow
</script>


{#if hasArrow}
  <span 
    class='{generateClassNamesFrom ? `${generateClassNamesFrom}-` : ''}popover-arrow'
    data-is-displayed={$isPopoverDisplayed}
  ></span>
{/if}
<aside 
  class='{generateClassNamesFrom ? `${generateClassNamesFrom}-` : ''}popover'
  data-is-displayed={$isPopoverDisplayed}
  {...$$restProps}
>
  <slot>{content}</slot>
</aside>