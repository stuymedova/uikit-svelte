<script>
  import { getContext } from 'svelte'
  import { Stepper } from './Stepper.svelte'

  const context = getContext(Stepper)
  const stepperValue = context.stepperValue
  const generateClassNamesFrom = context.generateClassNamesFrom
</script>


<span class='{generateClassNamesFrom}-value'>{$stepperValue}</span>