<script>
  export let label = ''
  export let isOn = false
  export let isDisabled = false
  export let generateClassNamesFrom = 'switch'

  let ref = null
</script>


<button 
  bind:this={ref}
  class={generateClassNamesFrom}
  type='button'
  role='switch'
  aria-checked={isOn}
  aria-disabled={isDisabled}
  {...$$restProps}
  on:click
  on:click|preventDefault={() => { 
    if (!isDisabled) {
      isOn = !isOn
    }
    ref.focus()
  }}
  on:mouseover
  on:focus
  on:mouseout
  on:blur
  on:mouseenter
  on:mouseleave
  on:keydown
>
  {#if label !== ''}
    <span class='{generateClassNamesFrom}-label'>
      <slot>{label}</slot>
    </span>
  {/if}
  <span class='{generateClassNamesFrom}-item'>
    <span class='{generateClassNamesFrom}-item-knob'></span>
  </span>
</button>