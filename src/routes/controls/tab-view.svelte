<script>
	import '$styles/system-display/lightMode.css'
  import { TabView, TabbedControl, Tab, TabPane, TabContent } from '$lib'
</script>


<div class='component-wrapper'>
  <TabView generateIdsFromId='gallery'>
    <TabbedControl>
      <Tab>First</Tab>
      <Tab>Second</Tab>
      <Tab>Third</Tab>
    </TabbedControl>

    <TabPane>
      <TabContent>
        Turpis egestas pretium aenean pharetra magna. Cum 
        sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi 
        scelerisque eu ultrices vitae.
      </TabContent>
      <TabContent>
        This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
      </TabContent>
      <TabContent>
        Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
      </TabContent>
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