<script>
  import { getContext } from 'svelte'
  import { Button } from '$lib'

  const context = getContext('Stepper')
  const step = context.step
  const setValue = context.setValue
  const isAbleToDecrement = context.isAbleToDecrement
  const topLevelClassName = context.topLevelClassName
</script>


<Button 
  class='button {topLevelClassName}-button {topLevelClassName}-decrement-button' 
  isDisabled={!$isAbleToDecrement}
  a11yLabel={`Decrement by ${step}`}
  on:click={() => { setValue(-step) }}
>
  <slot />
</Button>