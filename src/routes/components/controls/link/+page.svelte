<!-- DEMO 1: Link around an inline element -->
<script>
	import '$styles/main.css'
  import { Wrapper } from '$lib'
  import { Link } from '$lib'
</script>


<Wrapper class='component-wrapper'>
  <Link
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
  >
    Label
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
</style>


<!-- DEMO 2: Link around a block element -->
<!-- <script>
	import '$styles/main.css'
  import { Wrapper } from '$lib'
  import { Link } from '$lib'
  import pictureOfABloomingTree from '$lib/assets/images/spring.jpg'
</script>


<Wrapper class='component-wrapper'>
  <Link
    destination='https://github.com/stuymedova/uikit-svelte'
    shouldBeOpenedInNewTab={true}
    isInline={false}
  >
    <Wrapper class='card-wrapper'>
      <img class='card-image' src={pictureOfABloomingTree} alt='' />
      <Wrapper class='card-caption-wrapper'>
        <p>Lorem ipsum</p>
        <p>Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient.</p>
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

  .card-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  :global(.card-wrapper) {
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
    border-radius: 10px;
    overflow: hidden;
  }

  :global(.card-caption-wrapper) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px 20px;

    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    color: var(--color-text-primary);
    background-color: var(--color-background);

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }
</style> -->