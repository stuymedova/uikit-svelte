<script>
	// import '$lib/styles/lightMode.css'
  import { TabView, Tab, TabPanel } from '$lib'
</script>


<div class='tab-view-container'>
  <TabView>
    <Tab id='first' controls='first-panel'>First</Tab>
    <Tab id='second' controls='second-panel'>Second</Tab>
    <Tab id='third' controls='third-panel'>Third</Tab>

    <TabPanel id='first-panel' labelledBy='first'>First tab's content</TabPanel>
    <TabPanel id='second-panel' labelledBy='second'>Second tab's content</TabPanel>
    <TabPanel id='third-panel' labelledBy='third'>Third tab's content</TabPanel>
  </TabView>
</div>


<style>
  /* .tab-view-container {
		width: 100%;
		padding-top: 12px;
		display: flex;
		justify-content: center;
  }

  :global(.tab) {
    outline: none;
  } */
</style>