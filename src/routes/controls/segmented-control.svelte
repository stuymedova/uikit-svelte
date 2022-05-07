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
  .segmented-control-container {
		width: 100%;
		padding-top: 12px;
		display: flex;
		justify-content: center;
  }

  :global(.segmented-control-item) {
    outline: none;
  }
</style>