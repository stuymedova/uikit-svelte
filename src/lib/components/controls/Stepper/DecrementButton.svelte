<script>
  import { getContext } from 'svelte'
  import { Stepper } from './Stepper.svelte'
  import { Button } from '$lib'

  export let label = 'Decrement'
  export let a11yLabel = ''

  const context = getContext(Stepper)
  const setValue = context.setValue
  const isAbleToDecrement = context.isAbleToDecrement
  const generateClassNamesFrom = context.generateClassNamesFrom
</script>


<Button 
  class='button {generateClassNamesFrom}-button {generateClassNamesFrom}-decrement-button' 
  a11yLabel={a11yLabel === '' ? undefined : a11yLabel}
  isDisabled={!$isAbleToDecrement}
  on:click={() => { setValue('decrement') }}
>
  <slot>{label}</slot>
</Button>