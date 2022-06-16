<script>
  import { onMount } from 'svelte'

  export let label = ''
  export let value = 0
  export let range = [0, 99]
  export let step = 1

  let isAbleToDecrement = true
  let isAbleToIncrement = true

  const changeValue = (step) => {
    if (value + step >= range[0] && value + step <= range[1]) {
      value += step
    }
  }

  const checkIfValueIsChangeable = () => {
    if (value - step >= range[0] && value + step <= range[1]) {
      isAbleToDecrement = true
      isAbleToIncrement = true
    } else if (value - step >= range[0] && !(value + step <= range[1])) {
      isAbleToDecrement = true
      isAbleToIncrement = false
    } else if (!(value - step >= range[0]) && value + step <= range[1]) {
      isAbleToDecrement = false
      isAbleToIncrement = true
    } else {
      isAbleToDecrement = false
      isAbleToIncrement = false
    }
  }

  onMount(() => {
    if (range.length !== 2) {
      console.warn(`Stepper: Array "range" must contain two elements. Currently, it contains ${range.length}`)
    }
    if (range[0] >= range[1]) {
      console.warn(`Stepper: Invalid range. Lower bound value must be smaller than the upper bound value`)
    }
    if (value < range[0] || value > range[1]) {
      console.warn(`Stepper: Value out of range. Value must be within range bounds`)
    }
    if (step <= 0) {
      console.warn(`Stepper: Step must be assigned a non-negative and non-zero value`)
    }

    checkIfValueIsChangeable()
  })
</script>


<div class='stepper'>
  {#if label !== ''}
    <span class='stepper-label'>{label}</span>
  {/if}

  <div class='stepper-control'>
    <span class='stepper-value'>{value}</span>
    <button 
      class='stepper-button stepper-decrement-button' 
      aria-label={`Decrement by ${step}`}
      on:click={() => { changeValue(-step); checkIfValueIsChangeable() }}
      aria-disabled={!isAbleToDecrement}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="minus" transform="translate(-14 -16)">
          <rect class="icon_background" width="12" height="12" transform="translate(14 16)" fill="none"/>
          <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(14.625 22)"/>
        </g>
      </svg>
    </button>
    <button 
      class='stepper-button stepper-increment-button' 
      aria-label={`Increment by ${step}`}
      on:click={() => { changeValue(step); checkIfValueIsChangeable() }}
      aria-disabled={!isAbleToIncrement}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="plus" transform="translate(0.625)">
          <path class="vertical_stroke" data-name="vertical stroke" d="M0,11.375a.6.6,0,0,1-.625-.566V-.059A.6.6,0,0,1,0-.625a.6.6,0,0,1,.625.566V10.809A.6.6,0,0,1,0,11.375Z" transform="translate(5.375 0.625)"/>
          <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(0 6)"/>
        </g>
      </svg>
    </button>
  </div>
</div>