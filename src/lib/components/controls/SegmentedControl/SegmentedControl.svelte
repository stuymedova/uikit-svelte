<script context='module'>
	export const SegmentedControl = {}
</script>

<script lang='ts'>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let generateClassNamesFrom = 'segmented-control'
  export let isBackgroundAnimated = true

  type Segment = {
    index: number
    isDisabled: boolean
    length?: number
    offset?: number
  }

  const segments: Segment[] = []
  
  let focusedSegmentIndex = writable(selectedIndex)
  let selectedSegmentIndex = writable(selectedIndex) // Selected Segment is one that is focused and not disabled
  let indexesIterator = -1
  let backgroundLength: number | undefined = 0
  let backgroundOffset: number | undefined = 0

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
    addSegment: (
      index: number, 
      isDisabled: boolean, 
      length: number | undefined = undefined, 
      offset: number | undefined = undefined) => {
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
        segments.push({ index, isDisabled, length, offset })
      } else {
        segments.push({ index, isDisabled })
      }
    },
    setSelected: (segmentIndex: number) => {
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