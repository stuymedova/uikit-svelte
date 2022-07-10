<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let label = ''
  export let value = 0
  export let range = [0, 99]
  export let step = 1
  export let topLevelClassName = 'stepper'

  let stepperValue = writable(value)
  let isAbleToIncrement = writable(true)
  let isAbleToDecrement = writable(true)

  $: value = $stepperValue

  const checkIfWillBeAbleToSetValue = () => {
    if ($stepperValue - step >= range[0] && $stepperValue + step <= range[1]) {
      $isAbleToDecrement = true
      $isAbleToIncrement = true
    } else if ($stepperValue - step >= range[0] && !($stepperValue + step <= range[1])) {
      $isAbleToDecrement = true
      $isAbleToIncrement = false
    } else if (!($stepperValue - step >= range[0]) && $stepperValue + step <= range[1]) {
      $isAbleToDecrement = false
      $isAbleToIncrement = true
    } else {
      $isAbleToDecrement = false
      $isAbleToIncrement = false
    }
  }

  setContext('Stepper', {
    stepperValue,
    step,
    isAbleToIncrement,
    isAbleToDecrement,
    topLevelClassName,
    setValue: (step) => {
      if ($stepperValue + step >= range[0] && $stepperValue + step <= range[1]) {
        $stepperValue += step
        checkIfWillBeAbleToSetValue()
      }
    }
  })

  onMount(() => {
    if (range.length !== 2) {
      console.warn(`Stepper: Array "range" must contain two elements. Currently, it contains ${range.length}`)
    }
    if (range[0] >= range[1]) {
      console.warn(`Stepper: Invalid range. Lower bound value must be smaller than the upper bound value`)
    }
    if ($stepperValue < range[0] || $stepperValue > range[1]) {
      console.warn(`Stepper: Value out of range. Value must be within range bounds`)
    }
    if (step <= 0) {
      console.warn(`Stepper: Step must be assigned a non-negative and non-zero value`)
    }

    checkIfWillBeAbleToSetValue()
  })
</script>


<div class={topLevelClassName}>
  {#if label !== ''}
    <span class='{topLevelClassName}-label'>{label}</span>
  {/if}

  <div class='{topLevelClassName}-control'>
    <slot />
  </div>
</div>