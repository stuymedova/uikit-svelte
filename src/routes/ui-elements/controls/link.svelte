<script>
	import '$lib/styles/system-display/lightMode.css'
  import { Wrapper, Link } from '$lib'
  import picture from '$lib/assets/images/spring.jpg'
</script>


<!-- Link around inline element -->
<!-- <div class='component-wrapper'>
  <Link 
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
  >
    Label
  </Link>
</div> -->

<!-- Link around block element -->
<!-- TODO: finish up an example -->
<Wrapper class='component-wrapper'>
  <Link
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
    isInline={false}
  >
    <Wrapper class='card-wrapper'>
      <img src={picture} alt='A tree blooming in late spring' />
      <Wrapper class='card-caption-wrapper'>
        <p>Lorem ipsum</p>
        <p>Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi.</p>
      </Wrapper>
    </Wrapper>
  </Link>
</Wrapper>


<style>
  :global(.component-wrapper) {
		width: 100%;
		padding-top: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
    gap: 12px;
  }

  img {
    width: 300px;
    height: auto;
  }
</style>