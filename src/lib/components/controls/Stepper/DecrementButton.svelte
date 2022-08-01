<script>
  import { getContext } from 'svelte'
  import { Button } from '$lib'

  export let label = 'Decrement'
  export let a11yLabel = ''

  const context = getContext('Stepper')
  const setValue = context.setValue
  const isAbleToDecrement = context.isAbleToDecrement
  const topLevelClassName = context.topLevelClassName
</script>


<Button 
  class='button {topLevelClassName}-button {topLevelClassName}-decrement-button' 
  a11yLabel={a11yLabel === '' ? undefined : a11yLabel}
  isDisabled={!$isAbleToDecrement}
  on:click={() => { setValue('decrement') }}
>
  <slot>{label}</slot>
</Button>