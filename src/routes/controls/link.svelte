<script>
	import '$lib/styles/lightMode.css'
  import { Link } from '$lib'
  import picture from '$lib/assets/spring.jpg';
</script>


<!-- Link around inline element -->
<!-- <div class='link-container'>
  <Link 
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
  >
    Label
  </Link>
</div> -->

<!-- Link around block element -->
<div class='link-container'>
  <Link
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
    isInline={false}
  >
    <div>
      <img src={picture} alt='A tree blooming in spring' />
      <div>
        <p>Lorem ipsum</p>
        <p>Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi.</p>
      </div>
    </div>
  </Link>
</div>


<style>
  .link-container {
		width: 100%;
		padding-top: 12px;
		display: flex;
		justify-content: center;
  }

  :global(.link) {
    outline: none;
  }

  img {
    width: 300px;
    height: auto;
  }
</style>