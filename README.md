# UIKit Svelte

> ⚠️ WIP, not ready for production

UIKit Component Library provides views, controls, and layout structures for declaring your app’s user interface, as well as utility functions to augment their behaviour. It comes with fully customizable styles and built-in accessibility support. This makes it a great tool to integrate with your software product.

<!-- Additional material, which includes a high-level view of concepts that went into developing this library, as well additional guides and resources, such as one on accessibility, will be released shortly. -->

## Installation and Usage

**Installation**

Run in terminal:

```
npm i @stuymedova/uikit-svelte
```

**Usage**

Usage instructions can be found in each component's corresponding guide.

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
