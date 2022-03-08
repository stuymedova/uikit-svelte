<script>
	import '$lib/styles/lightMode.css'
  import { SegmentedControl, Segment } from '$lib'
</script>


<div class='segmented-control-container'>
  <SegmentedControl>
    <Segment id='first'>First</Segment>
    <Segment id='second'>Second</Segment>
    <Segment id='third'>Third</Segment>
  </SegmentedControl>
</div>


<style>
  :global(body) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
  }

  .segmented-control-container {
		width: 100%;
		position: absolute;
		left: 0;
		top: 12px;
		z-index: 99;
		display: flex;
		justify-content: center;
  }

  :global(.segmented-control-item) {
    outline: none;
  }
</style>