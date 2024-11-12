# HTML Tags: Paired and Self-Closing

In HTML, tags are the building blocks used to define elements on a webpage. Tags are usually enclosed within angle brackets (`< >`). Each tag instructs the browser on how to render or display content. HTML tags generally fall into two categories: **paired (or double) tags** and **self-closing (or single) tags**.

---

## 1. Paired Tags

Paired tags consist of an **opening tag** and a **closing tag** that work together to wrap content. The opening tag starts the element, and the closing tag ends it, with content placed between these tags.

### Syntax

```html
<tagname>Content goes here</tagname>
```

- The opening tag is `<tagname>`.
- The closing tag is `</tagname>` (note the / before the tag name).
- Any content within these tags will be affected by the tag’s properties.

### Examples

- `<h1>`Title of the Page`</h1>`: Wraps a heading level 1.
- `<p>`This is a paragraph.`</p>`: Wraps paragraph text.
- `<div>`Content inside a div.`</div>`: Wraps generic block-level content.

## 2. Self-Closing Tags

Self-closing tags, also known as single tags, do not require a closing tag. They represent elements that do not have content or children within them. These tags end within the same opening tag by including a forward slash (`/`) before closing the angle bracket.

### Syntax

```html
<tagname />
```

### Examples

`<img src="image.jpg" alt="Description" />`: Represents an image element.
`<br />`: Inserts a line break.
`<hr />`: Inserts a horizontal line or rule.

## Summary Table

| Tag Type         | Description                             | Example                   |
| ---------------- | --------------------------------------- | ------------------------- |
| Paired Tag       | Has both an opening and a closing tag   | `<p>Some text</p>`        |
| Self-Closing Tag | Only has one tag; does not wrap content | `<img src="image.jpg" />` |

# HTML Block and Inline Elements

In HTML, elements are categorized into two types: block-level elements and inline elements. These classifications determine how elements are displayed on a webpage and how they interact with other elements.

---

## 1. Block-Level Elements

Block-level elements take up the full width available to them, meaning they create a new "block" or "section" on the page. They generally start on a new line and stack vertically. Block-level elements are typically used for larger structural components of a webpage, like paragraphs, sections, or divs.

### Characteristics

- Occupy the full width of their container.
- Start on a new line.
- Can contain other block-level or inline elements.

### Examples

- `<div>`: Represents a generic container for grouping other elements.
- `<p>`: Defines a paragraph of text.
- `<h1>`, `<h2>`, ..., `<h6>`: Define different levels of headings.
- `<ul>`, `<ol>`, `<li>`: Define unordered/ordered lists and list items.

### Syntax

```html
<div>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph.</p>
</div>
```

## 2. Inline Elements

Inline elements only take up as much width as necessary and do not cause a line break. These elements are typically used for smaller portions of content within a block-level element. Inline elements do not disrupt the flow of content and can sit side by side.

### Characteristics

- Only occupy the width of their content.
- Do not create line breaks.
- Can be nested within block-level elements, but cannot contain block-level elements.

### Examples

- `<a>`: Defines a hyperlink.
- `<span>`: A generic container for inline content.
- `<img>`: Embeds an image.
- `<strong>`, `<em>`: Define bold and italic text, respectively.

### Syntax

```html
<p>This is <strong>bold</strong> text and <em>italic</em> text.</p>
```

## Summary Table

| Element Type        | Description                                                 | Example                |
| ------------------- | ----------------------------------------------------------- | ---------------------- |
| Block-Level Element | Occupies full width, creates a new line, used for structure | `<div>Content</div>`   |
| Inline Element      | Occupies only necessary width, does not break the line      | `<a href="#">Link</a>` |
