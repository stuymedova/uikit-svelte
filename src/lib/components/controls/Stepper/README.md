# Stepper

Stepper is a control that increments and decrements a value within specified range with a step size.

<img width="1198" alt="Stepper component demonstration" src="https://user-images.githubusercontent.com/53351370/169700699-6b14508f-eccb-4d20-917c-959e818c0029.png">

## Usage

Include component on a webpage by adding 
```js
import '@stuymedova/uikit-svelte/styles/system-display/lightMode.css' // Optional, alternatively use darkMode.css or a custom stylesheet
import { Stepper, IncrementButton, DecrementButton, StepperValue } from '@stuymedova/uikit-svelte'
```
within the `script` tag of a Svelte file. You can further use the component as such:

```html
<Stepper label='Optional Label'>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <g class="minus" transform="translate(-14 -16)">
        <rect class="symbol_background" width="12" height="12" transform="translate(14 16)" fill="none"/>
        <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(14.625 22)"/>
      </g>
    </svg>
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <g class="plus" transform="translate(0.625)">
        <path class="vertical_stroke" data-name="vertical stroke" d="M0,11.375a.6.6,0,0,1-.625-.566V-.059A.6.6,0,0,1,0-.625a.6.6,0,0,1,.625.566V10.809A.6.6,0,0,1,0,11.375Z" transform="translate(5.375 0.625)"/>
        <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(0 6)"/>
      </g>
    </svg>
  </IncrementButton>
</Stepper>
```

<!-- Include a link to Symbol component's documentation page -->
Or using a Symbol component as DecrementButton's and IncrementButton's conent:

```js
import '@stuymedova/uikit-svelte/styles/system-display/lightMode.css'
import { Stepper, IncrementButton, DecrementButton, StepperValue } from '@stuymedova/uikit-svelte'
import { Symbol } from '@stuymedova/uikit-svelte' // Additional import
```

```html
<Stepper label='Optional Label'>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

In either case, the generated HTML will be as such:

```html
<div class="stepper">
  <span class="stepper-label">Optional Label</span>
  
  <div class="stepper-control">
    <span class="stepper-value">0</span>
    <button class="stepper-button stepper-decrement-button" aria-label="Decrement by 1" aria-disabled="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="minus" transform="translate(-14 -16)">
          <rect class="symbol_background" width="12" height="12" transform="translate(14 16)" fill="none"></rect>
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

**Stepper**

***label***

Use this option to specify a Stepper's label. This option is not required, if not specified, a label will not be rendered.

```html
<Stepper label='Optional Label'>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

***value***

Use this option to specify a Stepper's value.

```html
<Stepper value={1}>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

You can bind to this value to have changes be reflected both in the Stepper component and any other part of the interface that uses it.

```html
<script>
  import '@stuymedova/uikit-svelte/styles/system-display/lightMode.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '@stuymedova/uikit-svelte'

  let stepperValue = 10
</script>

<Stepper bind:value={stepperValue}>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>

<p>Selected value is {stepperValue}</p>
```

***range***

Use `range` to define the lower and upper bound for possible values.

```html
<Stepper range={[0, 10]}>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

***step***

Use this option to specify a step by which value would get incremented and decremented.

Note: be careful using a floating point number as a step.

```html
<Stepper step={2}>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 2'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 2'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

Or, alternatively, you can use it as such:

```html
<script>
	import '@stuymedova/uikit-svelte/styles/system-display/lightMode.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '$lib'
	import { Symbol } from '$lib'

	let stepperStep = 2
</script>


<Stepper bind:step={stepperStep}>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by {stepperStep}'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by {stepperStep}'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

***isWrapped***

Use this option to specify if the value should be wrapped. Useful for when you use a Stepper to iterate over a dataset (in which case, set the range of possible values as equal to the bounds of the dataset). By default set to `false`.

```html
<script>
	import '@stuymedova/uikit-svelte/styles/system-display/lightMode.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '$lib'
	import { Symbol } from '$lib'

	let stepperValue = 0
	const colors = ['orange', 'orangered', 'gray', 'mediumpurple', 'plum']
</script>


<Stepper bind:value={stepperValue} isWrapped={true} range={[0, colors.length - 1]}>
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>

<div 
  style='width: 44px; height: 44px; border-radius: 100%; background-color: {colors[stepperValue]};'
></div>


<style>
	:global(.stepper) {
		width: 70px;
	}
</style>
```

***topLevelClassName*** (not reactive)

Use this option to specify the component's class name (one of the top-most wrapper and of each child that inherits its class name). 

```html
<Stepper topLevelClassName='quantity-stepper'>
  <StepperValue />
  <DecrementButton a11yLabel='Decrement by 1'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Increment by 1'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

By default set to "stepper". If, for instance, set to "quantity-stepper", as above, the component's HTML output would look as such:

```html
<div class="quantity-stepper">
  <span class="quantity-stepper-label">Optional Label</span>

  <div class="quantity-stepper-control">
    <span class="quantity-stepper-value">0</span>
    <button class="quantity-stepper-button quantity-stepper-decrement-button" aria-label="Decrement by 1" aria-disabled="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="minus" transform="translate(-14 -16)">
          <rect class="symbol_background" width="12" height="12" transform="translate(14 16)" fill="none"></rect>
          <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(14.625 22)"></path>
        </g>
      </svg>
    </button>
    <button class="quantity-stepper-button quantity-stepper-increment-button" aria-label="Increment by 1" aria-disabled="false">
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

**IncrementButton, DecrementButton**

***label***

Use this option to specify a label.

```html
<Stepper>
  <StepperValue />
  <DecrementButton label='Decrement value' />
  <IncrementButton label='Increment value' />
</Stepper>
```

Alternatively, a label can be specified between component tags:

```html
<Stepper>
  <StepperValue />
  <DecrementButton>Decrement value</DecrementButton>
  <IncrementButton>Increment value</IncrementButton>
</Stepper>
```

***a11yLabel***

Use this option to specify the component's aria-label attribute. Recommended if you're using an icon (such as an SVG file or a Symbol component) as a label.

```html
<Stepper label='Optional Label'>
  <StepperValue />
  <DecrementButton a11yLabel='Set to previous value'>
    <Symbol name='minus' />
  </DecrementButton>
  <IncrementButton a11yLabel='Set to next value'>
    <Symbol name='plus' />
  </IncrementButton>
</Stepper>
```

## Demo

Launch a demo by running in the terminal:

```shell
git clone --depth=1 https://github.com/stuymedova/uikit-svelte . # Clone the latest commit from this repository to the current directory
npm install
npm run dev
```

The demo will be available at http://localhost:3000/controls/stepper. Navigate to `src/routes/controls/stepper.svelte` to make any changes.
