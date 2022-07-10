<script>
  import { getContext } from 'svelte'
  import { Button } from '$lib'

  const context = getContext('Stepper')
  const step = context.step
  const setValue = context.setValue
  const isAbleToIncrement = context.isAbleToIncrement
  const topLevelClassName = context.topLevelClassName
</script>


<Button 
  class='button {topLevelClassName}-button {topLevelClassName}-increment-button' 
  isDisabled={!$isAbleToIncrement}
  a11yLabel={`Increment by ${step}`}
  on:click={() => { setValue(step) }}
>
  <slot />
</Button>