<script>
	import '$styles/system-display/lightMode.css'
  import { TabView, TabbedControl, Tab, TabPane, TabContent } from '$lib'
</script>


<div class='component-wrapper'>
  <TabView>
    <TabbedControl>
      <Tab>First</Tab>
      <Tab>Second</Tab>
    </TabbedControl>

    <TabPane>
      <TabContent>First tab's content</TabContent>
      <TabContent>Second tab's content</TabContent>
    </TabPane>
  </TabView>
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