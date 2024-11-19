# CSS position

In CSS, the `position` property specifies how an element is positioned in the document. It determines the type of positioning method used for an element. There are five main position values:

---

## 1. Static (Default)

**Definition:** This is the default value. Elements are positioned according to the normal flow of the document.

- **Characteristics:**

  - No special positioning is applied.
  - Top, right, bottom, and left properties do not affect it.

```css
div {
  position: static;
}
```

## 2. Relative

- **Definition:** The element is positioned relative to its normal position.

- **Characteristics:**

  - The top, right, bottom, and left properties offset the element from its normal position.
  - The space it originally occupied remains in the flow of the document.

```css
div {
  position: relative;
  top: 10px; /* Moves the element 10px down */
}
```

## 3. Absolute

- **Definition:** The element is positioned **relative to its nearest positioned ancestor** (an ancestor with `position` set to `relative`, `absolute`, or `fixed`). If no such ancestor exists, it is positioned relative to the `<html>` element (viewport).

- **Characteristics:**

  - Removed from the normal document flow.
  - Does not reserve space in the layout.
  - Use top, right, bottom, and left to specify exact positions.

```css
div {
  position: absolute;
  top: 50px; /* 50px from the top of the containing block */
}
```

## 4. Fixed

- **Definition:** The element is positioned relative to the viewport and does not move when the page is scrolled.

- **Characteristics:**
  - Removed from the normal document flow.
  - Use top, right, bottom, and left to specify its position.

```css
div {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

## 5. Sticky

- **Definition:** The element toggles between relative and fixed, depending on the scroll position.

- **Characteristics:**

  - Sticks to a specified position when scrolling reaches a defined point.
  - Requires the top, right, bottom, or left property to define the sticking point.

```css
div {
  position: sticky;
  top: 20px; /* Sticks 20px from the top of the viewport */
}
```

- (More about CSS position - w3 schools)[https://www.w3schools.com/css/css_positioning.asp]
