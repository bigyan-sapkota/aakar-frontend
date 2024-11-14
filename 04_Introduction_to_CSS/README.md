# Introduction to CSS

---

**CSS (Cascading Style Sheets)** is a language used to style and layout web pages. CSS enables the control of visual presentation, including colors, layouts, fonts, and responsiveness.

### Basic Syntax

CSS rules are made up of selectors and declarations:

```css
selector {
  property: value;
}
```

- **Selector:** Specifies which HTML elements the style will apply to.
- **Property:** A style attribute you want to change (e.g., color, font-size).
- **Value:** The desired setting for the property.

### Example

Here's a simple example to style paragraphs and headings in an HTML document.

```css
/* Selects all <p> elements and applies styles */
p {
  color: blue;
  font-size: 16px;
  line-height: 1.5;
}

/* Selects all <h1> elements and applies styles */
h1 {
  color: darkgreen;
  font-family: Arial, sans-serif;
  text-align: center;
}
```

### Explanation of Example

- `p` selector: Sets paragraph text color to blue, font size to 16px, and line height to 1.5.
- `h1` selector: Sets heading color to dark green, font to Arial, and centers the text.

---

## CSS Selectors & there types

CSS selectors target HTML elements based on different criteria. Here are the main types of CSS selectors:

### 1. Universal Selector (`*`)

Selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```

**Explanation:** Sets all elements to have no margin or padding, creating a reset.

### 2. Element Selector

Selects all instances of a specific HTML element.

```css
p {
  color: black;
}
```

**Explanation:** Styles all `<p>` elements with black text.

### 3. Class Selector (`.className`)

Targets elements with a specific class attribute.

```css
.button {
  background-color: blue;
  color: white;
}
```

**Explanation:** Applies blue background and white text to any element with the class `button`.

### 4. ID Selector (`#idName`)

Selects a unique element with a specific ID. ID selectors should be unique within a page.

```css
#header {
  background-color: lightgray;
}
```

**Explanation:** Styles the element with ID `header` with a light gray background.

### 5. Attribute Selector (`[attribute=value]`)

Selects elements based on the presence or value of an attribute.

```css
input[type="text"] {
  border: 1px solid black;
}
```

**Explanation:** Styles all `<input>` elements with `type="text"` to have a black border.

### 6. Pseudo-Class Selector (`:pseudo-class`)

Selects elements based on their state (like hover, focus, etc.).

```css
a:hover {
  color: red;
}
```

**Explanation:** Changes the link color to red when hovered.

### 7. Pseudo-Element Selector (`::pseudo-element`)

Selects a specific part of an element, such as the first line or the first letter.

```css
p::first-line {
  font-weight: bold;
}
```

**Explanation:** Makes the first line of every `<p>` bold.

### 8. Descendant Selector (`ancestor descendant`)

Targets elements that are children (at any depth) of a specified ancestor.

```css
div p {
  color: green;
}
```

**Explanation:** Sets the color of all `<p>` elements inside `<div>` elements to green.

### 9. Child Selector (`parent > child`)

Selects direct children of a specific parent element.

```css
ul > li {
  list-style-type: square;
}
```

**Explanation:** Styles only the direct `<li>` children of `<ul>` with a square bullet.

### 10. Adjacent Sibling Selector (`element1 + element2`)

Selects an element immediately following another.

```css
h1 + p {
  margin-top: 0;
}
```

**Explanation:** Sets the margin-top of a `<p>` that directly follows an `<h1>` to 0.

### 11. General Sibling Selector (`element1 ~ element2`)

Selects all siblings following a specified element.

```css
h1 ~ p {
  color: blue;
}
```

**Explanation:** Sets the color of all `<p>` elements that are siblings following an `<h1>` to blue.

Each selector type allows for greater control and precision when styling elements in HTML.

---

## Ways to insert CSS

There are three main ways to insert CSS into an HTML document:

### 1. Inline CSS

CSS is applied directly within an HTML element using the `style` attribute.

```html
<p style="color: blue; font-size: 18px;">This is an inline-styled paragraph.</p>
```

**Use Case:** Inline CSS is typically used for quick styling on a single element or for small, unique changes.

### 2. Internal CSS

CSS is placed within a `<style>` tag in the `<head>` section of the HTML document.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      p {
        color: green;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <p>This paragraph is styled with internal CSS.</p>
  </body>
</html>
```

**Use Case:** Internal CSS is useful for styling a single page, especially if the styles are unique to that page.

### 3. External CSS

CSS is placed in a separate .css file and linked to the HTML document using a `<link>` tag in the `<head>` section.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>This paragraph is styled with external CSS.</p>
  </body>
</html>
```

**External CSS (styles.css):**

```css
p {
  color: purple;
  font-size: 18px;
}
```

**Use Case:** External CSS is the preferred method for styling multiple pages. It keeps styling separate from HTML, making it easier to maintain and reuse styles across a website.
