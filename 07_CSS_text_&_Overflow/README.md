CSS offers a variety of text-related properties to control the appearance, alignment, spacing, and decoration of text in web design. Here's a breakdown of some key text-related properties:

---

## Font Properties

### 1. `font-family` :

- Specifies the font type for text.
- Values: A comma-separated list of fonts (e.g., `"Arial", "Helvetica", sans-serif`).
- Example:

```css
font-family: "Arial", "Helvetica", sans-serif;
```

### 2. `font-style`:

- Defines whether the font should be italicized or not.
- Values: `normal` | `italic` | `oblique`.

- Example:

```css
font-style: italic;
```

### 3. `font-size`:

Determines the size of the text.
Values: Absolute units (e.g., `px`, `em`, `rem`, `%`, `pt`) or relative sizes (`small`, `medium`, `large`).

- Example:

```css
font-size: 16px;
```

### 4. `font-weight`:

- Sets the thickness of the font.
- Values: `normal` |`bold` | `lighter` | `bolder` or `numeric` values (`100` to `900`).
- Example:

```css
font-weight: bold;
```

### 5. `font-variant`:

- Controls the use of small-caps or other font variants.
- Values: `normal` | `small-caps`.

- Example:

```css
font-variant: small-caps;
```

### 6. `font`:

- A shorthand property to set all font-related values at once (`font-style`, `font-variant`, `font-weight`, `font-size/line-height`, and `font-family`).
- Example:

```css
font: italic small-caps bold 16px/1.5 "Arial", sans-serif;
```

## Text Appearance

### 7. `color`:

Sets the text color.
Values: Named colors, HEX, RGB, HSL, or transparent.
Example:
css
Copy code
color: #333;

### 8. `text-transform`:

Controls text capitalization.
Values: none | capitalize | uppercase | lowercase.
Example:
css
Copy code
text-transform: uppercase;

### 9. `text-decoration`:

Adds decoration to text.
Values: none | underline | overline | line-through | blink (not widely supported).
Example:
css
Copy code
text-decoration: underline;

### 10. `letter-spacing`:

Adjusts the space between characters.
Values: Positive or negative length values (e.g., 2px, -0.5em).
Example:
css
Copy code
letter-spacing: 2px;

### 11. `word-spacing`:

Sets the spacing between words.
Values: Positive or negative length values.
Example:
css
Copy code
word-spacing: 5px;

### 12. `line-height`:

Specifies the vertical space between lines of text.
Values: A unitless number (multiplier) or length values (e.g., 1.5, 20px).
Example:
css
Copy code
line-height: 1.6;

### 13. `white-space`:

Controls how whitespace is handled.
Values:
normal (default, collapses spaces and breaks lines).
nowrap (no line breaks, all text in one line).
pre (preserves all spaces and line breaks).
pre-wrap (preserves spaces but allows wrapping).
pre-line (collapses spaces but preserves line breaks).
Example:
css
Copy code
white-space: nowrap;

### 14. `direction`:

Specifies the direction of text flow.
Values: ltr (left-to-right) | rtl (right-to-left).
Example:
css
Copy code
direction: rtl;

---

## Text Alignment

### 15. `text-align`:

Aligns text horizontally.
Values: left | right | center | justify | start | end.
Example:
css
Copy code
text-align: center;

### 16. `vertical-align`:

Aligns inline elements vertically relative to the line's baseline.
Values: baseline | top | middle | bottom | length units.
Example:
css
Copy code
vertical-align: middle;

## Text Overflow and Wrapping

### 17. `text-overflow`:

Controls how text is displayed when it overflows its container.
Values: clip | ellipsis.
Example:
css
Copy code
text-overflow: ellipsis;

### 18. `overflow-wrap` (or `word-wrap`):

Specifies whether the browser should break lines within words to prevent overflow.
Values: normal | break-word.
Example:
css
Copy code
overflow-wrap: break-word;

### 19. `hyphens`:

Controls hyphenation for text.
Values: none | manual | auto.
Example:

```css
hyphens: auto;
```

By combining these properties, you can achieve precise control over the styling and layout of text in your web projects. Let me know if you'd like examples for specific use cases!
