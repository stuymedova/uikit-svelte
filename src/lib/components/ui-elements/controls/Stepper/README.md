# Stepper

Stepper is a control that increments and decrements a value within specified range with a step size.

<img width="1198" alt="Stepper component demonstration" src="https://user-images.githubusercontent.com/53351370/169700699-6b14508f-eccb-4d20-917c-959e818c0029.png">

## Usage

Include component on a webpage by adding 
```js
import '@stuymedova/uikit-svelte/styles/SystemDisplay/lightMode.css' // Optional, alternatively use darkMode.css or a custom stylesheet
import { Stepper } from '@stuymedova/uikit-svelte'
```
within the `script` tag of a Svelte file. You can further use the component as such:

```html
<Stepper label='Optional Label' />
```

The generated HTML will be as such:

```html
<div class="stepper">
  <span class="stepper-label">Optional Label</span>

  <div class="stepper-control">
    <span class="stepper-value">0</span>
    <button class="stepper-button stepper-decrement-button" aria-label="Decrement by 1" aria-disabled="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="minus" transform="translate(-14 -16)">
          <rect class="icon_background" width="12" height="12" transform="translate(14 16)" fill="none"></rect>
          <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(14.625 22)"></path>
        </g>
      </svg>
    </button>
    <button class="stepper-button stepper-increment-button" aria-label="Increment by 1" aria-disabled="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="plus" transform="translate(0.625)">
          <path class="vertical_stroke" data-name="vertical stroke" d="M0,11.375a.6.6,0,0,1-.625-.566V-.059A.6.6,0,0,1,0-.625a.6.6,0,0,1,.625.566V10.809A.6.6,0,0,1,0,11.375Z" transform="translate(5.375 0.625)"></path>
          <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(0 6)"></path>
        </g>
      </svg>
    </button>
  </div>
</div>
```

## API

You can specify additional options for the Stepper component.

***label***

Use this option to specify a Stepper's label. This option is not required, if not specified, a label will not be rendered.

```html
<Stepper label='Optional Label' />
```

***value***

Use this option to specify a Stepper's value.

```html
<Stepper value={10} />
```

You can bind to this value to have changes be reflected both in the Stepper component and any other part of the interface that uses it.

```html
<script>
  import '@stuymedova/uikit-svelte/styles/SystemDisplay/lightMode.css'
  import { Stepper } from '@stuymedova/uikit-svelte'

  let stepperValue = 10
</script>

<Stepper bind:value={stepperValue} />
<p>Selected value is {stepperValue}</p>
```

***range***

Use `range` to define the lower and upper bound for possible values.

```html
<Stepper range={[0, 10]} />
```

***step***

Use this option to specify a step by which value would get incremented and decremented.

Note: be careful using a floating point number as a step.

```html
<Stepper step={2} />
```

## Demo

Launch a demo by running in the terminal:

```shell
git clone --depth=1 https://github.com/stuymedova/uikit-svelte . # Clone the latest commit from this repository to the current directory
npm install
npm run dev
```

The demo will be available at http://localhost:3000/ui-elements/controls/stepper. Navigate to `src/routes/ui-elements/controls/stepper.svelte` to make any changes.
