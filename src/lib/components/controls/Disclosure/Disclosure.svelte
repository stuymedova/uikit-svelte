<script>
  import { onMount } from 'svelte'
  import { Button } from '$lib'
  import { Symbol } from '$lib'
  import { ChevronRight } from '$symbols'
  
  export let title = 'Title'
  export let symbol = ChevronRight
  export let isExpanded = false
  export let generateIdsFrom = ''
  // TODO: add generateClassNamesFrom

  let trayRef = null
  
  $: trayRefHeight= trayRef?.scrollHeight

  onMount(() => {
    if (generateIdsFrom === '') {
      console.warn('Disclosure: Property "generateIdsFrom" is empty. Provide a String that would be used to generate ids and aria-controls/aria-labelledby attributes.')
    }
  })
</script>


<div class='disclosure'>
  <h3 class='disclosure-title'>
    <Button 
      class='disclosure-button' 
      id={generateIdsFrom !== '' ? generateIdsFrom + '--button' : $$restProps.id} 
      aria-controls={generateIdsFrom !== '' ? generateIdsFrom + '--tray' : undefined} 
      aria-expanded={isExpanded} 
      {...$$restProps} 
      on:click={() => { 
        isExpanded = !isExpanded
      }}
    >
      <span class='disclosure-title-text'>
        <slot>{title}</slot>
      </span>
      {#if symbol}
        <Symbol 
          symbol={symbol} 
          class='disclosure-symbol{isExpanded ? ' expanded' : ''}' />
      {/if}
    </Button>
  </h3>

  <div 
    bind:this={trayRef} 
    id={generateIdsFrom !== '' ? generateIdsFrom + '--tray' : $$restProps.id} 
    aria-labelledby={generateIdsFrom !== '' ? generateIdsFrom + '--button' : undefined} 
    class='disclosure-tray' 
    class:expanded={isExpanded} 
    aria-hidden={isExpanded ? true : undefined} 
    style='height: {isExpanded ? trayRefHeight : 0}px'
  >
    {#if $$slots.content}
      <div class='disclosure-content'>
        <slot name='content' />
      </div>
    {/if}
  </div>
</div>