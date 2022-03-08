# Segmented Control

Segmented control is a set of two or more segments, each of which functions as a mutually exclusive button. It features a background, which can be animated with a sliding effect. It is often used to switch between different views.

<img width="1153" alt="segmented-control-svelte" src="https://user-images.githubusercontent.com/53351370/150729107-af17b189-4b81-42ec-8fda-985699180c8e.png">

## Installation and Usage

**Installation**

To add a component to a Svelte/SvelteKit project, run:
```shell
npm i segmented-control-svelte
```

**Usage**

Include component on a webpage by adding 
```js
import 'segmented-control-svelte/lightMode.css' // Optional, alternatively use darkMode.css or a custom stylesheet
import { SegmentedControl, Segment } from 'segmented-control-svelte'
```
within the `script` tag of a Svelte file. You can further use the component as such:

```html
<SegmentedControl>
  <Segment id='first'>First</Segment>
  <Segment id='second'>Second</Segment>
</SegmentedControl>
```

The generated HTML will be as such:

```html
<div class="segmented-control" role="tablist" aria-orientation="horizontal">
  <button id="first" class="segmented-control-item selected" role="tab" aria-selected="true" aria-disabled="false" tabindex="0">First</button>
  <button id="second" class="segmented-control-item" role="tab" aria-disabled="false" aria-selected="false" aria-disabled="false" tabindex="-1">Second</button>
  <div class="segmented-control-background" role="presentation" style="width: 75px; transform: translateX(2px);"></div>
</div>
```

## API

You can specify additional options for Segmented Control and each separate Segment.

**Segmented Control**

***selectedIndex***

Use this option to specify an index of an element to be selected by default, starting with 0.

```html
<SegmentedControl selectedIndex={1}>
  <Segment id='first'>First</Segment>
  <Segment id='second'>Second</Segment> <!-- This element will be selected initially -->
</SegmentedControl>
```

You can bind to this value to have changes to the selected index be reflected both in the Segmented Control component and any other part of the interface that uses it.

```html
<script>
  import 'segmented-control-svelte/main.css'
  import { SegmentedControl, Segment } from 'segmented-control-svelte'

  let selectedIndex = 1
</script>

<SegmentedControl bind:selectedIndex>
  <Segment id='first'>First</Segment>
  <Segment id='second'>Second</Segment>
</SegmentedControl>

<p>Index of a selected element: {selectedIndex}</p>
```

**Segment**

***id***

This option is *required*. For the component to work properly each segment must have a unique identifier.

```html
<SegmentedControl>
  <Segment id='first'>First</Segment>
  <Segment id='second'>Second</Segment>
</SegmentedControl>
```

***label***

Use this option to specify a segment's label.

```html
<SegmentedControl>
  <Segment id='first' label='First' />
  <Segment id='second' label='Second' />
</SegmentedControl>
```

Alternatively, a label can be specified between component tags:

```html
<SegmentedControl>
  <Segment id='first'>First</Segment>
  <Segment id='second'>Second</Segment>
</SegmentedControl>
```

***isDisabled***

Use this option to disable selection of a segment.

```html
<SegmentedControl>
  <Segment id='first'>First</Segment>
  <Segment id='second' isDisabled={true}>Second</Segment>
</SegmentedControl>
```

## Demo

Launch a demo by running in the terminal:

```shell
git clone --depth=1 https://github.com/stuymedova/segmented-control-svelte . # Clone the latest commit from this repository to your current directory
npm install
npm run dev
```

The demo will be available at http://localhost:3000. Navigate to `src/routes/index.svelte` to make any changes.