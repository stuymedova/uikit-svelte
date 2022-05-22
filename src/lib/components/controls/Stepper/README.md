# Stepper

Stepper is a control that increments and decrements a value with a step size within specified range.

<img width="1198" alt="Stepper component demonstration" src="https://user-images.githubusercontent.com/53351370/169700699-6b14508f-eccb-4d20-917c-959e818c0029.png">

## Usage

## API

***label***

Use this option to specify a stepper's label. This option is not required.

```html
```

Alternatively, a label can be specified between component tags:

```html
```

***value***

Use this option to specify a stepper's value.

```html
```

You can bind to this value to have changes be reflected both in the Stepper component and any other part of the interface that uses it.

```html
```

***range***

Use `range` to define the lower and upper bounds of possible values.

```html
```

***step***

Use this option to specify a step by which value would get incremented and decremented.

Note: be careful using a floating point number as a step.

## Demo
