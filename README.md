# UIKit Svelte

UIKit Component Library provides accessible components for declaring your app’s user interface, as well as gestures and utility functions to augment their behaviour.

<!-- TEMPORARY -->
## Component Library

| Type                | Component                   | Source and Documentation                                                    | Preview                                                                          |
| ------------------- | --------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ***Accessibility*** | VisuallyHidden              | [Link](src/lib/components/accessibility/VisuallyHidden) (Doc. TBD)          | TBD                                                                              |
|                     | HiddenFromScreenReaders     | [Link](src/lib/components/accessibility/HiddenFromScreenReaders) (Doc. TBD) | TBD                                                                              |
| ***Controls***      | Button                      | [Link](src/lib/components/controls/Button)                                  | [Link](https://uikit-svelte.vercel.app/components/controls/button)               |
|                     | Disclosure*                 | [Link](src/lib/components/controls/Disclosure) (Doc. TBD)                   | [Link](https://uikit-svelte.vercel.app/components/controls/disclosure)           |
|                     | Link                        | [Link](src/lib/components/controls/Link)                                    | [Link](https://uikit-svelte.vercel.app/components/controls/link)                 |
|                     | Popover*                    | [Link](src/lib/components/controls/Popover) (Doc. TBD)                      | [Link](https://uikit-svelte.vercel.app/components/controls/popover)              |
|                     | SegmentedControl            | [Link](src/lib/components/controls/SegmentedControl)                        | [Link](https://uikit-svelte.vercel.app/components/controls/segmented-control)    |
|                     | Stepper                     | [Link](src/lib/components/controls/Stepper)                                 | [Link](https://uikit-svelte.vercel.app/components/controls/stepper)              |
|                     | Switch                      | [Link](src/lib/components/controls/Switch)                                  | [Link](https://uikit-svelte.vercel.app/components/controls/switch)               |
|                     | TabView                     | [Link](src/lib/components/controls/TabView)                                 | [Link](https://uikit-svelte.vercel.app/components/controls/tab-view)             |
| ***Layout***        | TBD                         | TBD                                                                         | TBD                                                                              |
| ***Media***         | Symbol                      | [Link](src/lib/components/media/Symbol)                                     | [Link](https://uikit-svelte.vercel.app/components/media/symbol)                  |
| ***Utilities***     | ConditionalWrapper          | [Link](src/lib/components/utilities/ConditionalWrapper)                     | TBD                                                                              |
|                     | Wrapper                     | [Link](src/lib/components/utilities/Wrapper)                                | TBD                                                                              |

\* Components are being worked on and need improvement.

## Functions

| Type            | Function     | Source (Documentation TBD)                       | Preview    |
| --------------- | ------------ | ------------------------------------------------ | ---------- |
| ***Gestures***  | longPress    | [Link](src/lib/functions/gestures/longPress)     | TBD        |
|                 | pressOutside | [Link](src/lib/functions/gestures/pressOutside)  | TBD        |
| ***Utilities*** | applyAction  | [Link](src/lib/functions/utilities/applyAction)  | No preview |
|                 | applyActions | [Link](src/lib/functions/utilities/applyActions) | No preview |

## Symbols and Styles

Default ones are provided under the System Display (`src/lib/assets/system-display`) directory. It's expected for users to customize them as necessary and provide under a custom directory.
<!-- END TEMPORARY -->


<!-- UIKit Component Library provides views, controls, and layout structures for declaring your app’s user interface, as well as utility functions to augment their behaviour. It comes with fully customizable styles, a built-in accessibility support, and conforms to [standards]. This makes UIKit great tool to integrate with your software product.

Additional material, which includes a high-level view of concepts that went into developing this library, as well additional guides and resources, such as one on accessibility, will be released shortly. -->

<!-- Description (option to skip to the Installation and Usage segment)

**Design**

Description, link to Figma

**Development**

Optimized for usability.

Description

## Component Library

List of components, with descriptions and links to each component's README.

## Customizing behaviour & appearance

Allows to customize and extend behaviour and appearance of components. How to do it?

## Extending the library

Extend the library with a component that fits your application best. / Compose custom components by combining built-in components with the custom ones you create, or by making them entirely on your own. 

[This template/these instructions] provide(-s) a starting point for creating your component.

- …
- Adjust appearance characteristics
- Respond to user interactions
- Add accessibility features (Consult https://www.w3.org/TR/wai-aria-practices/ for best practices. The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web.)

## Installation and Usage

**Installation**

To add a component to a Svelte/SvelteKit project, run:

```shell
npm install uikit-svelte
```

**Usage**

Import stylesheet (or use your own)
Import components

Use according to the each components' corresponding instructions.

For usage instructions refer each component's corresponding guide:

Button
...

-->