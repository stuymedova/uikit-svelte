# Link

A control for navigating to a URL.

<img width="1198" alt="Link component demonstration" src="https://user-images.githubusercontent.com/53351370/169700556-a49cfdc3-f38e-4b87-870f-3e7b94ac4dbe.png">

## Usage

Include component on a webpage by adding 
```js
import '@stuymedova/uikit-svelte/styles/system-display/lightMode.css' // Optional, alternatively use darkMode.css or a custom stylesheet
import { Link } from '@stuymedova/uikit-svelte'
```
within the `script` tag of a Svelte file. You can further use the component as such:

```html
<Link 
  destination='https://github.com/stuymedova/uikit-svelte'
  shouldOpenInNewTab={true}
>
  Label
</Link>
```

The generated HTML will be as such:

```html
<a class="link" href="https://github.com/stuymedova/uikit-svelte" target="_blank" rel="noopener noreferrer">Label</a>
```

## API

You can specify additional options for the Link component.

***label***

Use this option to specify a Link's label.

```html
<Link label='Label' destination='https://github.com/stuymedova/uikit-svelte' />
```

Alternatively, a label can be specified between component tags:

```html
<Link destination='https://github.com/stuymedova/uikit-svelte'>Label</Link>
```

***destination***

Use this option to specify the Link's destination URL. As already shown above, the destination can be specified as such:

```html
<Link destination='https://github.com/stuymedova/uikit-svelte'>Label</Link>
```

***shouldOpenInNewTab***

Use this option to specify if a Link should be opened in a new tab. If set to `true`, a link recieves additional attributes `target="_blank"` and `rel="noopener noreferrer"`. By default set to `false`.

```html
<Link 
  destination='https://github.com/stuymedova/uikit-svelte'
  shouldOpenInNewTab={true}
>
  Label
</Link>
```

## Demo

Launch a demo by running in the terminal:

```shell
git clone --depth=1 https://github.com/stuymedova/uikit-svelte . # Clone the latest commit from this repository to the current directory
npm install
npm run dev
```

The demo will be available at http://localhost:3000/controls/link. Navigate to `src/routes/controls/link.svelte` to make any changes.