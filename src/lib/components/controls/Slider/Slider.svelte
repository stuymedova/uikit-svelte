<script>
  // value, minValue (& label), maxValue (& label), step
  // track, progress, thumb

  export let value = 0
  export let range = [0, 100]
  export let step = 1
  export let labelledBy =''
</script>


<div 
  id='???'
  class='slider'
  role='slider'
  tabindex='0'
  aria-valuemin={range[0]}
  aira-valuemax={range[1]}
  aria-valuenow={value}
  aria-labelledby={labelledBy === '' ? undefined : labelledBy}
>
  <div class='slider-thumb'></div>
  <div class='slider-progress'></div>
  <div class='slider-track'></div>
</div>