<script>
  import { getContext } from 'svelte'
  import { Stepper } from './Stepper.svelte'
  import { Button } from '$lib'

  export let label = 'Increment'
  export let a11yLabel = ''

  const context = getContext(Stepper)
  const setValue = context.setValue
  const isAbleToIncrement = context.isAbleToIncrement
  const generateClassNamesFrom = context.generateClassNamesFrom
</script>


<Button 
  class='button {generateClassNamesFrom}-button {generateClassNamesFrom}-increment-button' 
  a11yLabel={a11yLabel === '' ? undefined : a11yLabel}
  isDisabled={!$isAbleToIncrement}
  on:click={() => { setValue('increment') }}
>
  <slot>{label}</slot>
</Button>