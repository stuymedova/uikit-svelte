# Switch

A control that toggles between on and off states.

## Usage

Include component on a webpage by adding 
```js
import '@stuymedova/uikit-svelte/styles/lightMode.css' // Optional, alternatively use darkMode.css or a custom stylesheet
import { Switch } from '@stuymedova/uikit-svelte'
```
within the `script` tag of a Svelte file. You can further use the component as such:

```html
<Switch label='Optional Label' />
```

The generated HTML will be as such:

```html
<button class="switch" type="button" role="switch" aria-checked="false" aria-disabled="false">
  <span class="switch-label">Optional Label</span>
  <span class="switch-item">
    <span class="switch-item-knob"></span>
  </span>
</button>
```

## API

You can specify additional options for the Switch component.

***label***

Use this option to specify a Switch's label. This option is not required, if not specified, a label will not be rendered.

```html
<Switch label='Optional Label' />
```

***isOn***

Use this option to specify if a Switch is in an "on" or "off" state. By default set to `false`.

```html
<Switch isOn={true} />
```

You can bind to this value to have changes to the Switch's state be reflected both in the Switch component and any other part of the interface that uses it.

<!-- TODO: consider styling in these examples -->
```html
<script>
  import '@stuymedova/uikit-svelte/styles/lightMode.css'
  import { Switch } from '@stuymedova/uikit-svelte'

  let isSwitchOn = false
</script>

<Switch bind:isOn={isSwitchOn} />
<p>Switch is {isSwitchOn ? 'On' : 'Off'}</p>
```

***isDisabled***

Use this option to disable changing a Switch's state.

```html
<Switch isDisabled={true} />
```

## Demo

Launch a demo by running in the terminal:

```shell
git clone --depth=1 https://github.com/stuymedova/uikit-svelte . # Clone the latest commit from this repository to the current directory
npm install
npm run dev
```

The demo will be available at http://localhost:3000/controls/switch. Navigate to `src/routes/controls/switch.svelte` to make any changes.