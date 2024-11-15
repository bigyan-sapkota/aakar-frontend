# 1. The CSS Box Model

In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model:

![CSS box model](./assets/images/css-box-model.png)

Explanation of the different parts:

- **Content** - The content of the box, where text and images appear. The `width` and `height` properties define the content area size.
- **Padding** - Clears an area around the content. The padding is transparent. Padding is controlled using padding properties like `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
- **Border** - A border that goes around the padding and content . The thickness and style of the border can be customized using properties like `border-width`, `border-style`, and `border-color`.
- **Margin** - Clears an area outside the border. The margin is transparent. Margins are set using margin properties like `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

## Total Width and Height Calculation

The total width and height of an element's box are calculated by adding up the following:

- **Total Width** = `width + padding-left + padding-right + border-left + border-right + margin-left + margin-right`
- **Total Height** = `height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom`

## Box-Sizing Property

The `box-sizing` property controls how the `width` and `height` are calculated:

- `content-box` (default): width and height include only the content area.
- `border-box`: `width` and `height` include content, padding, and border (excluding margin). This simplifies layout management by keeping the total size consistent.

### Example CSS Code

```css
.element {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 15px;
  box-sizing: border-box; /* Includes padding and border in the specified width/height */
}
```

Using the box model helps control how elements are spaced and aligned, giving you full control over the design and layout of your web pages.

# 2. CSS border

The CSS `border` property is used to define the border around an HTML element. You can set the border's width, style, and color. Here's a breakdown of how to use it:

### Basic Syntax

```css
element {
  border: <border-width> <border-style> <border-color>;
}
```

- `border-width`: Specifies the width of the border. It can be in pixels (px), em units (em), or other valid CSS units.
- `border-style` : Defines the style of the border. Common values are:
  - `solid`: A solid line.
  - `dashed`: A dashed line.
  - `dotted`: A dotted line.
  - `double`: Two solid lines.
  - `none`: No border.
- `border-color`: Specifies the color of the border. You can use color names, hex, RGB, or RGBA values.

### Example 1: Simple Border

```css
div {
  border: 2px solid black;
}
```

This gives the `div` element a solid black border of 2px thickness.

### Example 2: Border with Different Width, Style, and Color

```css
div {
  border-width: 4px;
  border-style: dashed;
  border-color: red;
}
```

This gives the `div` element a red, dashed border with a 4px thickness.

### Border on Specific Sides

You can also define borders for specific sides of the element:

```css
div {
  border-top: 2px solid black; /* Top border */
  border-right: 2px dashed red; /* Right border */
  border-bottom: 2px dotted green; /* Bottom border */
  border-left: 2px solid blue; /* Left border */
}
```

### Example 3: Using `border-radius` for Rounded Corners

You can round the corners of a border using the `border-radius` property:

```css
div {
border: 5px solid black;
border-radius: 10px; /_ Round corners _/
}
```

This applies a black border with 10px rounded corners.

### Example 4: Using Border Shorthand

Instead of specifying the width, style, and color separately, you can use the shorthand syntax:

```css
div {
  border: 3px solid #333;
}
```

This combines the width, style, and color into one line.

### Example 5: Applying Borders to Other Elements

Borders can be applied to various elements, including images and forms:

```css
img {
  border: 3px solid #888;
}

input {
  border: 1px solid #ccc;
}
```

The `border` property is a versatile and commonly used tool for defining element boundaries and improving visual design.

# 3. CSS margin and padding

In CSS, margin and padding control the space around elements. Here's how they work:

- **Margin**: The space outside an element, creating distance between it and other elements.
- **Padding**: The space inside an element, creating distance between the content and the element's border

Both `margin` and `padding` can take one, two, three, or four values to specify the spacing differently on each side.

## Values Explained

### 1. One Value (`margin: 10px`; or `padding: 10px;`)

- Applies the same value to all four sides: `top`, `right`, `bottom`, and `left`.
- **Example**: `margin: 10px;` applies a 10px margin on every side of the element.

### 2. Two Values (margin: 10px 20px; or padding: 10px 20px;)

The first value applies to the top and bottom.
The second value applies to the left and right.
Example: `margin: 10px 20px;` sets 10px for `top` and `bottom` and 20px for `left` and `right`.

### 3. Three Values (`margin: 10px 20px 30px;` or `padding: 10px 20px 30px;`)

- The first value applies to the top.
- The second value applies to the left and right.
- The third value applies to the bottom.
- **Example**: `padding: 10px 20px 30px;` sets 10px for the `top`, 20px for `left` and `right`, and 30px for the `bottom`.

### 4. Four Values (`margin: 10px 20px 30px 40px;` or `padding: 10px 20px 30px 40px;`)

- Each side gets its own value in this order: top, right, bottom, left.
- Example: `margin: 10px 20px 30px 40px;` sets 10px for the `top`, 20px for the `right`, 30px for the `bottom`, and 40px for the `left`.

### Summary Table

| Number of Values | Description                       | Example                         |
| ---------------- | --------------------------------- | ------------------------------- |
| 1                | All sides are equal.              | `margin: 10px;`                 |
| 2                | `top/bottom` and `left/right`.    | `padding: 10px 20px;`           |
| 3                | `top`, `left/right`, `bottom`.    | `margin: 10px 20px 30px;`       |
| 4                | `top`, `right`, `bottom`, `left`. | `padding: 10px 20px 30px 40px;` |

# 3. CSS units

CSS units are a fundamental part of styling web pages, as they allow you to specify sizes, spacing, and positioning. Here’s a breakdown of the main types of CSS units, along with examples for each.

## 1. Absolute Units

Absolute units are fixed and don't change based on the viewport or parent elements. They’re great for consistent sizes but less flexible for responsive design.

- **px (pixels)**: Fixed size relative to the display resolution.

```css
.box {
  width: 200px;
  height: 100px;
}
```

- **in (inches)**, **cm (centimeters)**, **mm (millimeters)**: Physical units used mainly for print styles.

```css
.poster {
  width: 8.5in;
  height: 11in;
}
```

- **pt (points)**, **pc (picas)**: Common in print media, where 1pt = 1/72 inch, and 1pc = 12pt.

```css
.text {
  font-size: 12pt;
}
```

## 2. Relative Units

Relative units scale based on other values (like the viewport or font size), making them useful for responsive design.

- **em**: Relative to the font size of the nearest parent element. (1em equals the current font size).

```css
.text {
  font-size: 16px; /* Base font size */
  padding: 1.5em; /* 1.5 times the font size, 24px */
}
```

- **rem (root em)**: Relative to the root font size (usually defined in the `<html>`).

```css
html {
  font-size: 16px; /* Base size */
}
.text {
  font-size: 2rem; /* 32px */
}
```

- **% (percentage)**: Relative to the parent element.

```css
.container {
  width: 50%; /* 50% of the parent width */
}
```

## 3. Viewport-Based Units

These units are relative to the viewport size, making them useful for responsive layouts.

- **vw (viewport width)**: 1vw = 1% of the viewport width.

```css
.section {
  width: 80vw; /* 80% of the viewport width */
}
```

- **vh (viewport height)**: 1vh = 1% of the viewport height.

```css
.hero {
  height: 100vh; /* Full viewport height */
}
```

- **vmin and vmax**: vmin is the smaller of vw and vh, vmax is the larger of vw and vh.

```css
.element {
  font-size: 5vmin; /* 5% of the smaller viewport dimension */
}
```

## 4. Flexible Units

These units are ideal for building layouts that adapt based on available space.

- **fr (fractional unit)**: Used in CSS Grid to divide space into fractions.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr; /* 1 part to the first column, 2 parts to the second */
}
```

## 5. Miscellaneous Units

These include units like `ch`, `ex`, and `lh`.

- **ch (character units)**: Based on the width of the character "0" in the current font.

```css
.input {
  width: 20ch; /* 20 characters wide */
}
```

- **ex**: Relative to the height of the lowercase "x" in the current font.
- **lh (line-height)**: Based on the current line height.
