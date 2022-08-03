<script>
  import * as Symbol from '$symbols/system-display'

  // TODO: scale symbols (small, medium, and large)
  // TODO: account for dark mode
  export let name = ''
  
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const capitalizedName = capitalize(name)

  if (Symbol[capitalizedName] === undefined) {
    console.error(`Symbol: Symbol "${name}" is undefined`)
  }
</script>


<span class='symbol'>
  <svelte:component this={Symbol[capitalizedName]} />
</span>