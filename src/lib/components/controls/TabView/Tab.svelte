<script>
  // TODO: handle aria-controls/aria-labelledby pair
  import { Segment } from '$lib'

  export let label = 'Label'
  export let isDisabled = false
</script>


<Segment
  aria-controls=''
  bind:isDisabled={isDisabled}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot>{label}</slot>
</Segment>