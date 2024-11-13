# HTML Tags and Attributes

---

## 1. Anchor Tag(`<a>`):

The `<a>` tag, also known as the anchor tag, is used to define a hyperlink. The `href` attribute specifies the URL of the destination, and the text or `content` inside the tag serves as the clickable part of the link.

### Syntax

```html
<a href="URL">Link Text</a>
```

-`href`: This attribute holds the URL to which the link points. It can be an external link, an internal link within the same website, or even an anchor link that directs to a specific section of the page.

### Examples

- **External Link**: Opens a different website.

```html
<a href="https://www.example.com">Visit Example</a>
```

- **Internal Link**: Links to another page on the same site.

```html
<a href="/about.html">About Us</a>
```

- **Anchor Link**: Scrolls to a specific section within the page.

```html
<a href="#contact">Go to Contact Section</a>
```

---

The `target` attribute in Anchor tag defines where to open the linked document. It’s optional, but it offers flexibility in terms of where the link opens.

```html
<a href="URL" target="value">Link Text</a>
```

### Common `target` Values

- 1. `_self` (default): Opens the link in the same tab or window.

```html
<a href="https://www.example.com" target="_self">Same Tab Link</a>
```

- 2. `_blank`: Opens the link in a new tab or window, allowing users to keep the current page open.

```html
<a href="https://www.example.com" target="_blank">New Tab Link</a>
```

## 2 . Button Tag

The `<button>` tag is used to create a clickable button in HTML.

```html
<button>Click Me</button>
```

---

The `onclick` attribute defines a JavaScript function or code that runs when the button is clicked. The `onclick` attribute can trigger a JavaScript function or code when the button is clicked.

### Syntax

```html
<button onclick="myFunction()">Click Me</button>
```

### Example

```html
<!-- Inline JavasCript -->
<button onclick="alert('Button clicked!')">Click Me</button>

<!-- Inline JavasCript -->
<button onclick="greet()">Say Hello</button>

<script>
  function greet() {
    alert("Hello!");
  }
</script>
```

- The first example will an alert with the message "Button clicked!" when the button is clicked.
- The second example will call the `greet` function and display an alert saying "Hello!" when the button is clicked.

## 3. Linking CSS and JavaScript in HTML

To include CSS and JavaScript in your HTML file, you use the `<link>` and `<script>` tags.

- 1. **Linking CSS**: To link an external CSS file, use the `<link>` tag within the `<head>` section of your HTML document.

### Syntax

```html
<link rel="stylesheet" href="styles.css" />
```

- `rel="stylesheet"`: Specifies that the file is a stylesheet.
- `href="styles.css"`: Specifies the path to the CSS file.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

- 2. **2. Linking a JavaScript File**: To link an external JavaScript file, use the `<script>` tag. It's usually placed at the end of the `<body>` section for better page load performance.

### Syntax

```html
<script src="script.js"></script>
```

- `src="script.js"`: Specifies the path to the JavaScript file.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello, World!</h1>
    <script src="script.js"></script>
  </body>
</html>
```
