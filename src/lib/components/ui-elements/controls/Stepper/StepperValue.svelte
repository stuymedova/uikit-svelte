<script>
  import { getContext } from 'svelte'

  const context = getContext('Stepper')
  const topLevelClassName = context.topLevelClassName
  const stepperValue = context.stepperValue
</script>


<span class='{topLevelClassName}-value'>{$stepperValue}</span>