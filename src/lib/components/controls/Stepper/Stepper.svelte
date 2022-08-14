<script context='module'>
	export const Stepper = {}
</script>

<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let label = ''
  export let value = 0
  export let range = [0, 99]
  export let step = 1
  export let isWrapped = false
  export let generateClassNamesFrom = 'stepper'

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

  setContext(Stepper, {
    stepperValue,
    isAbleToIncrement,
    isAbleToDecrement,
    generateClassNamesFrom,
    setValue: (action) => {
      if (isWrapped) {
        if (action === 'increment') {
          $stepperValue += step
        } else if (action === 'decrement') {
          $stepperValue -= step
        }

        if ($stepperValue < range[0]) {
          $stepperValue = range[1] - (range[0] - $stepperValue - 1)
        } else if ($stepperValue > range[1]) {
          $stepperValue = range[0] + ($stepperValue - range[1] - 1)
        }
      } else {
        if (action === 'increment' && $stepperValue + step <= range[1]) {
          $stepperValue += step
        } else if (action === 'decrement' && $stepperValue - step >= range[0]) {
          $stepperValue -= step
        }

        checkIfWillBeAbleToSetValue()
      }
    }
  })

  onMount(() => {
    if (range.length !== 2) {
      console.warn(`Stepper: The range property value, an array, must contain 2 elements. Currently, it contains ${range.length}`)
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

    if (!isWrapped) {
      checkIfWillBeAbleToSetValue()
    }
  })
</script>


<div class={generateClassNamesFrom}>
  {#if label !== ''}
    <span class='{generateClassNamesFrom}-label'>{label}</span>
  {/if}

  <div class='{generateClassNamesFrom}-control'>
    <slot />
  </div>
</div>