<script>
  import * as Symbol from '$symbols/system-display-symbols'

  export let name = undefined
  
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const capitalizedName = capitalize(name)

  if (Symbol[capitalizedName] === undefined) {
    console.error(`Symbol: Symbol "${name}" is undefined`)
  }
</script>


<svelte:component this={Symbol[capitalizedName]} />