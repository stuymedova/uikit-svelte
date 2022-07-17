<script>
  export let label = ''
  export let isOn = false
  export let isDisabled = false
  export let topLevelClassName = 'switch'

  let ref = null
</script>


<button 
  bind:this={ref}
  class={topLevelClassName}
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
    <span class='{topLevelClassName}-label'>
      <slot>{label}</slot>
    </span>
  {/if}
  <span class='{topLevelClassName}-item'>
    <span class='{topLevelClassName}-item-knob'></span>
  </span>
</button>