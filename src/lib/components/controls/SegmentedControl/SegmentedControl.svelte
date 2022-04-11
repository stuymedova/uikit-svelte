<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  
  let focusedSegmentIndex = writable(selectedIndex)
  let selectedSegmentIndex = writable(selectedIndex) // Selected Segment is one that is focused and not disabled
  let segments = []
  let indexesIterator = -1
  let backgroundWidth = 0
  let backgroundOffset = 0

  $: selectedIndex = $selectedSegmentIndex

  setContext('SegmentedControl', {
    focusedSegmentIndex,
    selectedSegmentIndex,
    setIndex: () => {
      indexesIterator += 1
      return indexesIterator
    },
    addSegment: ({ index, isDisabled, width, offset }) => {
      if (index === $selectedSegmentIndex) {
        if (isDisabled) {
          console.warn('Segmented Control: Avoid initially selecting a disabled Segment.')
        }

        backgroundWidth = width
        backgroundOffset = offset
      }
      segments = [...segments, { index, isDisabled, width, offset }]
    },
    setSelected: (nextIndex) => {
      if (nextIndex >= 0 && nextIndex < segments.length) {
        $focusedSegmentIndex = nextIndex

        if (!segments[nextIndex].isDisabled) {
          $selectedSegmentIndex = $focusedSegmentIndex

          backgroundWidth = segments[$selectedSegmentIndex].width
          backgroundOffset = segments[$selectedSegmentIndex].offset
        }
      }
    }
  })

  onMount(() => {
    if (segments.length < 2) {
      console.warn('Segmented Control: For the component to function correctly, provide two or more Segments.')
    }
  })
</script>


<div 
  class='segmented-control' 
  role='tablist'
  {...$$restProps}
  on:click
  on:mouseover
  on:focus
  on:mouseout
  on:blur
  on:mouseenter
  on:mouseleave
>
  <slot />
  <div 
    class='segmented-control-background' 
    role='presentation' 
    style='width: {backgroundWidth}px; transform: translateX({backgroundOffset}px)'
  ></div>
</div>