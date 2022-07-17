<script>
  import { getContext } from 'svelte'
  import { Button } from '$lib'

  export let a11yLabel = ''

  const context = getContext('Stepper')
  const step = context.step
  const setValue = context.setValue
  const isAbleToDecrement = context.isAbleToDecrement
  const topLevelClassName = context.topLevelClassName
</script>


<!-- TODO: increment and decrement may expose step, so each one could be set
individually, if needed -->
<!-- TODO: expose label for consistency -->
<Button 
  class='button {topLevelClassName}-button {topLevelClassName}-decrement-button' 
  a11yLabel={a11yLabel === '' ? undefined : a11yLabel}
  isDisabled={!$isAbleToDecrement}
  on:click={() => { setValue(-step) }}
>
  <slot />
</Button>