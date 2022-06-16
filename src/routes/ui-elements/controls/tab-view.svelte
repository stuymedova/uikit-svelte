<script>
	import '$lib/styles/lightMode.css'
  import { TabView, TabList, Tab, TabPanel, TabContent } from '$lib'
</script>


<div class='tab-view-container'>
  <TabView>
    <TabList>
      <Tab>First</Tab>
      <Tab>Second</Tab>
    </TabList>

    <TabPanel>
      <TabContent>First tab's content</TabContent>
      <TabContent>Second tab's content</TabContent>
    </TabPanel>
  </TabView>
</div>


<style>
  .tab-view-container {
		width: 100%;
		padding-top: 12px;
		display: flex;
    flex-direction: column;
		align-items: center;
    gap: 12px;
  }
</style>