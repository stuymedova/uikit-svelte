<script>
  import * as Symbol from '$symbols/system-display'

  // TODO: scale symbols (small, medium, and large), and align them with text
  // TODO: account for dark mode
  export let name = ''
  
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1)
  }

  const capitalizedName = capitalize(name)

  if (Symbol[capitalizedName] === undefined) {
    console.error(`Symbol: Symbol "${capitalizedName}" is undefined`)
  }
</script>


<span class='symbol'>
  <svelte:component this={Symbol[capitalizedName]} />
</span>