<script>
  export let label = ''
  export let isOn = false
  export let isDisabled = false

  let ref = null
</script>


<button 
  bind:this={ref}
  class='switch'
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
  <span class='switch-item'>
    <span class='switch-item-knob'></span>
  </span>
  {#if label !== ''}
    <span class='switch-label'>
      <slot>{label}</slot>
    </span>
  {/if}
</button>