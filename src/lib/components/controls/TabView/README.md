# Tab View

Tab view is a set of mutually exclusive panes of content, which you can switch between using a tabbed control.

<img width="1306" alt="Screen Shot 2022-07-31 at 12 56 26 PM" src="https://user-images.githubusercontent.com/53351370/182306355-58d3edad-37e0-45ce-b006-50cad9881731.png">

## Usage

Include the component on a webpage by adding 
```js
import '@stuymedova/uikit-svelte/assets/system-display/styles/lightMode.css' // Optional, alternatively use darkMode.css or a custom stylesheet
import { TabView, TabbedControl, Tab, TabContent, TabPane } from '@stuymedova/uikit-svelte'
```
within the `script` tag of a Svelte file. You can further use the component as such:

```html
<TabView generateIdsFrom='sample-text'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

The generated HTML will be as such:

```html
<div class="tab-view" role="tablist">
  <div class="tab-view-tabbed-control" role="tablist" aria-orientation="horizontal" data-is-background-animated="false">
    <button id="sample-text-item-0--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-0" aria-disabled="false" aria-selected="true" tabindex="0">First</button> 
    <button id="sample-text-item-1--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-1" aria-disabled="false" aria-selected="false" tabindex="-1">Second</button> 
    <button id="sample-text-item-2--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-2" aria-disabled="false" aria-selected="false" tabindex="-1">Third</button> 
  </div>
  
  <div class="tab-view-tab-content">
    <div id="sample-text-item-0" class="tab-view-tab-pane selected" role="tabpanel" aria-labelledby="sample-text-item-0--trigger" tabindex="0" style="opacity: 1">Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.</div>
    <div id="sample-text-item-1" class="tab-view-tab-pane" role="tabpanel" aria-labelledby="sample-text-item-1--trigger" tabindex="-1" style="opacity: 0">This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.</div>
    <div id="sample-text-item-2" class="tab-view-tab-pane" role="tabpanel" aria-labelledby="sample-text-item-2--trigger" tabindex="-1" style="opacity: 0">Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.</div>
  </div>
</div>
```

## API

You can specify additional options for the Tab View, Tabbed Control, and each separate Tab.

**Tab View**

***selectedIndex***

Use this option to specify an index of an element to be selected by default, starting with 0.

```html
<TabView selectedIndex={1} generateIdsFrom='sample-text'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab> <!-- This element will be selected initially -->
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane> <!-- This element will be displayed initially -->
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

You can bind to this value to have changes to the selected index be reflected both in the Tab View component and in any other part of the interface that uses it.

```html
<script>
  import '@stuymedova/uikit-svelte/assets/system-display/styles/lightMode.css'
  import { TabView, TabbedControl, Tab, TabContent, TabPane } from '@stuymedova/uikit-svelte'

  let tabViewSelectedIndex = 1
</script>


<TabView generateIdsFrom='sample-text' bind:selectedIndex={tabViewSelectedIndex}>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>

<p>Index of a selected tab: {tabViewSelectedIndex}</p>
```

***generateIdsFrom (not reactive)***

Required. Use this option to specify an id for each Tab and Tab Content component, as well as their "aria-controls" and "aria-labelledby" attributes. The generated Tab ids and Tab Contents' "aria-labelledby" attributes follow `{generateIdsFrom}-item-{index}--trigger` template. The generated Tab Content ids and Tabs' "aria-controls" attributes follow `{generateIdsFrom}-item-{index}` template. Indexes are set automatically. By default the property is unspecified.

```html
<TabView generateIdsFrom='sample-text'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

The component's HTML output looks as such:

```html
<div class="tab-view" role="tablist">
  <div class="tab-view-tabbed-control" role="tablist" aria-orientation="horizontal" data-is-background-animated="false">
    <button id="sample-text-item-0--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-0" aria-disabled="false" aria-selected="true" tabindex="0">First</button> 
    <button id="sample-text-item-1--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-1" aria-disabled="false" aria-selected="false" tabindex="-1">Second</button> 
    <button id="sample-text-item-2--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-2" aria-disabled="false" aria-selected="false" tabindex="-1">Third</button> 
  </div>
  
  <div class="tab-view-tab-content">
    <div id="sample-text-item-0" class="tab-view-tab-pane selected" role="tabpanel" aria-labelledby="sample-text-item-0--trigger" tabindex="0" style="opacity: 1">Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.</div>
    <div id="sample-text-item-1" class="tab-view-tab-pane" role="tabpanel" aria-labelledby="sample-text-item-1--trigger" tabindex="-1" style="opacity: 0">This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.</div>
    <div id="sample-text-item-2" class="tab-view-tab-pane" role="tabpanel" aria-labelledby="sample-text-item-2--trigger" tabindex="-1" style="opacity: 0">Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.</div>
  </div>
</div>
```

***generateClassNamesFrom (not reactive)***

Use this option to specify the component's class name (one of the top-most wrapper and of each child that inherits its class name).

```html
<TabView generateIdsFrom='sample-text' generateClassNamesFrom='information-tab-view'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

By default set to "tab-view". If, for instance, set to "information-tab-view", the component's HTML output would look as such:

```html
<div class="information-tab-view" role="tablist">
  <div class="information-tab-view-tabbed-control" role="tablist" aria-orientation="horizontal" data-is-background-animated="false">
    <button id="sample-text-item-0--trigger" class="button information-tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-0" aria-disabled="false" aria-selected="true" tabindex="0">First</button> 
    <button id="sample-text-item-1--trigger" class="button information-tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-1" aria-disabled="false" aria-selected="false" tabindex="-1">Second</button> 
    <button id="sample-text-item-2--trigger" class="button information-tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-2" aria-disabled="false" aria-selected="false" tabindex="-1">Third</button> 
  </div>
  
  <div class="information-tab-view-tab-pane">
    <div id="sample-text-item-0" class="information-tab-view-tab-content selected" role="tabpanel" aria-labelledby="sample-text-item-0--trigger" tabindex="0" style="opacity: 1">Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.</div>
    <div id="sample-text-item-1" class="information-tab-view-tab-content" role="tabpanel" aria-labelledby="sample-text-item-1--trigger" tabindex="-1" style="opacity: 0">This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.</div>
    <div id="sample-text-item-2" class="information-tab-view-tab-content" role="tabpanel" aria-labelledby="sample-text-item-2--trigger" tabindex="-1" style="opacity: 0">Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.</div>
  </div>
</div>
```

***controlPosition***

Use this option to specify a side by which to position the Tabbed Control relative to the Tab Content. Accepted values are "top", "bottom", "left", and "right". By default set to "top".

```html
<TabView generateIdsFrom='sample-text' controlPosition='bottom'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

**Tabbed Control**

***orientation (not reactive)***

Use this option to specify an orientation of the Tabbed Control. Accepted values are "horizontal" and "vertical". Default orientation is "horizontal".

```html
<TabView generateIdsFrom='sample-text' controlPosition='left'>
  <TabbedControl orientation='vertical'>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

***isBackgroundAnimated (not reactive)***

<!-- TODO: styles for when the background is animated -->

Use this option to specify whether or not a background should be animated. Set to `false` by default. 

```html
<TabView generateIdsFrom='sample-text' isBackgroundAnimated={true}>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

If an animated background is required, it will be rendered, resulting in an HTML as such:

```html
<div class="tab-view" role="tablist">
  <div class="tab-view-tabbed-control" role="tablist" aria-orientation="horizontal" data-is-background-animated="false">
    <button id="sample-text-item-0--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-0" aria-disabled="false" aria-selected="true" tabindex="0">First</button> 
    <button id="sample-text-item-1--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-1" aria-disabled="false" aria-selected="false" tabindex="-1">Second</button> 
    <button id="sample-text-item-2--trigger" class="button tab-view-tabbed-control-item" type="button" data-behaviour="push" role="tab" aria-controls="sample-text-item-2" aria-disabled="false" aria-selected="false" tabindex="-1">Third</button> 
    <!-- TODO: testing -->
    <div class="tab-view-tabbed-control-background" role="presentation" style="width: 75px; transform: translateX(2px);"></div>
  </div>
  
  <div class="tab-view-tab-content">
    <div id="sample-text-item-0" class="tab-view-tab-pane selected" role="tabpanel" aria-labelledby="sample-text-item-0--trigger" tabindex="0" style="opacity: 1">Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.</div>
    <div id="sample-text-item-1" class="tab-view-tab-pane" role="tabpanel" aria-labelledby="sample-text-item-1--trigger" tabindex="-1" style="opacity: 0">This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.</div>
    <div id="sample-text-item-2" class="tab-view-tab-pane" role="tabpanel" aria-labelledby="sample-text-item-2--trigger" tabindex="-1" style="opacity: 0">Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.</div>
  </div>
</div>
```

**Tab**

***label***

Use this option to specify a Tab label.

```html
<TabView generateIdsFrom='sample-text'>
  <TabbedControl>
    <Tab label='First' />
    <Tab label='Second' />
    <Tab label='Third' />
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

Alternatively, a label can be specified between component tags:

```html
<TabView generateIdsFrom='sample-text'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

***isDisabled***

Use this option to disable the selection of a Tab.

```html
<TabView generateIdsFrom='sample-text'>
  <TabbedControl>
    <Tab>First</Tab>
    <Tab isDisabled={true}>Second</Tab>
    <Tab>Third</Tab>
  </TabbedControl>

  <TabContent>
    <TabPane>
      Turpis egestas pretium aenean pharetra magna. Cum sociis natoque penatibus et magnis dis parturient. Enim sed faucibus turpis in eu mi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisi scelerisque eu ultrices vitae.
    </TabPane>
    <TabPane>
      This is a viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Sed aliquam ultrices mauris. Phasellus magna. Fusce egestas elit eget lorem. Pellentesque auctor neque nec urna.
    </TabPane>
    <TabPane>
      Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus ullamcorper ipsum rutrum nunc. Etiam vitae tortor. Praesent ac massa at ligula laoreet iaculis. Duis vel nibh at velit scelerisque suscipit.
    </TabPane>
  </TabContent>
</TabView>
```

## Demo

Launch a demo by running in the terminal:

```shell
git clone --depth=1 https://github.com/stuymedova/uikit-svelte . # Clone the latest commit from this repository to the current directory
npm install
npm run dev
```

The demo will be available at http://localhost:xxxx/components/controls/tab-view. Navigate to `src/routes/components/controls/tab-view.svelte` to make any changes.