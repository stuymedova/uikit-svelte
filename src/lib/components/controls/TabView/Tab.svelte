<script>
  import { getContext } from 'svelte'
  import { Segment } from '$lib'

  export let id = ''
  export let label = 'Label'
  export let isDisabled = false

  const context = getContext('TabView')
  const index = context.setTabIndex()
  const generateIdsFromId = context.generateIdsFromId
</script>


<Segment
  id={(generateIdsFromId !== '') ? `${generateIdsFromId}-item-${index}--trigger` : (id !== '') ? id : undefined}
  bind:isDisabled={isDisabled}
  aria-controls={(generateIdsFromId !== '') ? `${generateIdsFromId}-item-${index}` : ($$restProps["aria-controls"]) ? $$restProps["aria-controls"] : undefined}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot>{label}</slot>
</Segment>