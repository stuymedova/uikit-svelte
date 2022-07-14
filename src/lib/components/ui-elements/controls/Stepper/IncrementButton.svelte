<script>
  import { getContext } from 'svelte'
  import { Button } from '$lib'

  export let a11yLabel = ''

  const context = getContext('Stepper')
  const step = context.step
  const setValue = context.setValue
  const isAbleToIncrement = context.isAbleToIncrement
  const topLevelClassName = context.topLevelClassName
</script>


<Button 
  class='button {topLevelClassName}-button {topLevelClassName}-increment-button' 
  a11yLabel={a11yLabel === '' ? undefined : a11yLabel}
  isDisabled={!$isAbleToIncrement}
  on:click={() => { setValue(step) }}
>
  <slot />
</Button>