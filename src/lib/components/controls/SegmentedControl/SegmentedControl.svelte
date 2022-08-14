<script context='module'>
	export const SegmentedControl = {}
</script>

<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  export let orientation = 'horizontal' // Options: horizontal/vertical
  export let generateClassNamesFrom = 'segmented-control'
  export let isBackgroundAnimated = true
  
  let focusedSegmentIndex = writable(selectedIndex)
  let selectedSegmentIndex = writable(selectedIndex) // Selected Segment is one that is focused and not disabled
  let segments = []
  let indexesIterator = -1
  let backgroundLength = 0
  let backgroundOffset = 0

  $: selectedIndex = $selectedSegmentIndex

  setContext(SegmentedControl, {
    focusedSegmentIndex,
    selectedSegmentIndex,
    orientation,
    generateClassNamesFrom,
    isBackgroundAnimated,
    setIndex: () => {
      indexesIterator += 1
      return indexesIterator
    },
    addSegment: (index, isDisabled, length = undefined, offset = undefined) => {
      if (index === $selectedSegmentIndex) {
        if (isDisabled) {
          console.warn('Segmented Control: Avoid initially selecting a disabled Segment.')
        }

        if (isBackgroundAnimated) {
          backgroundLength = length
          backgroundOffset = offset
        }
      }

      if (isBackgroundAnimated) {
        segments = [...segments, { index, isDisabled, length, offset }]
      } else {
        segments = [...segments, { index, isDisabled }]
      }
    },
    setSelected: (segmentIndex) => {
      if (segmentIndex >= 0 && segmentIndex < segments.length) {
        $focusedSegmentIndex = segmentIndex

        if (!segments[segmentIndex].isDisabled) {
          $selectedSegmentIndex = $focusedSegmentIndex

          if (isBackgroundAnimated) {
            backgroundLength = segments[$selectedSegmentIndex].length
            backgroundOffset = segments[$selectedSegmentIndex].offset
          }
        }
      }
    }
  })

  onMount(() => {
    if (selectedIndex < 0 || selectedIndex >= segments.length) {
      console.warn(`Segmented Control: Provided "selectedIndex" value is out of range. Value should be greater than or equal to 0, and less than ${segments.length}, provided ${selectedIndex}.`)
    }

    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      console.error(`Segmented Control: Accepted orientation types are "horizontal" and "vertical". Provided "${orientation}".`)
    }
  })
</script>


<div 
  class={generateClassNamesFrom} 
  role='tablist'
  aria-orientation={orientation}
  data-is-background-animated={isBackgroundAnimated}
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:focus
  on:mouseout
  on:mouseleave
  on:blur
>
  <slot />

  {#if isBackgroundAnimated}
    <div 
      class='{generateClassNamesFrom}-background' 
      role='presentation' 
      style='
        {orientation === 'vertical' ? 'height' : 'width'}: {backgroundLength}px; 
        transform: translate{orientation === 'vertical' ? 'Y' : 'X'}({backgroundOffset}px)'
    ></div>
  {/if}
</div>