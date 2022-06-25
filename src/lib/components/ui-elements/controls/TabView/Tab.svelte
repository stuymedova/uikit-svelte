<script>
  // TODO: handle aria-controls/aria-labelledby pair
  import { Segment } from '$lib'

  export let label = 'Label'
  export let isDisabled = false // TODO: test isDisabled for reactivity
</script>


<Segment
  role='tab'
  aria-controls=''
  isDisabled={isDisabled}
  {...$$restProps}
>
  <slot>{label}</slot>
</Segment>