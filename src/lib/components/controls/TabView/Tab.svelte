<script>
  import { getContext } from 'svelte'
  import { Segment } from '$lib'

  export let label = 'Label'
  export let isDisabled = false

  const context = getContext('TabView')
  const index = context.setTabIndex()
  const generateIdsFrom = context.generateIdsFrom
</script>


<Segment
  id={
    ($$restProps.id) ? $$restProps.id :
    (generateIdsFrom !== '') ? `${generateIdsFrom}-item-${index}--trigger`: undefined}
  bind:isDisabled={isDisabled}
  aria-controls={
    ($$restProps["aria-controls"]) ? $$restProps["aria-controls"] :
    (generateIdsFrom !== '') ? `${generateIdsFrom}-item-${index}` : undefined}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot>{label}</slot>
</Segment>