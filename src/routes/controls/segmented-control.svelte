<script>
	import '$styles/system-display/lightMode.css'
  import { SegmentedControl, Segment } from '$lib'
</script>


<div class='component-wrapper'>
  <SegmentedControl>
    <Segment>First</Segment>
    <Segment>Second</Segment>
  </SegmentedControl>
</div>


<style>
  .component-wrapper {
		width: 100%;
		padding-top: 12px;
		display: flex;
    flex-direction: column;
		align-items: center;
    gap: 12px;
  }
</style>