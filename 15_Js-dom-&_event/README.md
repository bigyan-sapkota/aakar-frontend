## What is the DOM in JavaScript?

The DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document. It provides a tree-like representation where each element, attribute, and piece of text in the document is treated as a node. Using the DOM, JavaScript can interact with and manipulate the content, structure, and style of a web page.

For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1 id="header">Hello, World!</h1>
  </body>
</html>
```

The DOM for this page looks like:

```less

- Document
  - html
    - head
        - title ("Example")
    - body
        - h1 (id="header", "Hello, World!")
```

---

## What is DOM Manipulation?

DOM manipulation refers to using JavaScript to interact with and modify the DOM. It allows developers to dynamically change the content, structure, or appearance of a webpage.

Examples of DOM Manipulation:

- Changing content:

```js
document.getElementById("header").textContent = "Welcome!";
```

- Adding new elements:

```js
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);
```

- Changing styles:

```js
document.getElementById("header").style.color = "blue";
```

---

# Selecting Elements

Before you can manipulate elements, you must first select them. JavaScript provides several methods for selecting DOM elements:

### 1. By ID

Select an element using its unique ID:

```js
const header = document.getElementById("header");
console.log(header.textContent);
```

### 2. By Class

Select elements using their class name:

```js
const items = document.getElementsByClassName("item");
console.log(items[0].textContent); // Returns the first element with the class 'item'
```

### 3. By Tag Name

Select elements by their tag name:

```js
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length); // Number of <p> elements
```

### 4. Query Selectors

Modern, flexible methods to select elements using CSS selectors:

- **Single element:** `querySelector()`

```js
const header = document.querySelector("#header"); // Select by ID
const firstItem = document.querySelector(".item"); // Select the first element with class 'item'
```

- **All matching elements:** `querySelectorAll()`

```js
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item.textContent));
```

# Modifying Content in the DOM

Once you have selected elements in the DOM, you can modify their content dynamically using JavaScript. Here are several ways to change the content of an element:

## 1. Changing Text Content

**Using** `textContent`
The `textContent` property is used to set or get the text inside an element. It replaces all the text inside the element.

```html
<h1 id="header">Original Title</h1>
<script>
  const header = document.getElementById("header");
  header.textContent = "New Title"; // Replaces "Original Title" with "New Title"
</script>
```

- **Use Case:** When you want to replace plain text.
- **Behavior:** It removes any HTML tags inside the element and only displays text.

---

## 2. Changing HTML Content

**Using** `innerHTML`
The `innerHTML` property allows you to set or get the HTML content of an element, including nested HTML tags.

```html
<div id="content">Old content</div>
<script>
  const content = document.getElementById("content");
  content.innerHTML = "<p>New <strong>HTML</strong> Content</p>";
</script>
```

- **Use Case:** When you need to insert or replace HTML structure.
- **Caution:** Avoid using innerHTML with untrusted content to prevent Cross-Site Scripting (XSS) attacks.

---

## 3. Appending Content

**Using** `appendChild`
You can create a new DOM element and append it to an existing element.

```html
<ul id="list">
  <li>Item 1</li>
</ul>
<script>
  const list = document.getElementById("list");
  const newItem = document.createElement("li");
  newItem.textContent = "Item 2"; // Add text to the new element
  list.appendChild(newItem); // Append the new element to the list
</script>
```

- **Use Case:** Adding new elements as children to an existing parent element.

---

Using `append` **(Modern Alternative)**
The `append()` method can add text or elements. Unlike `appendChild`, it can accept multiple arguments and also text strings.

```html
<div id="container"></div>
<script>
  const container = document.getElementById("container");
  container.append("Some text ", document.createElement("span"));
</script>
```

---

### 4. Prepending Content

**Using** `prepend`
The `prepend()` method adds content to the beginning of an element.

```html
<ul id="list">
  <li>Item 2</li>
</ul>
<script>
  const list = document.getElementById("list");
  const newItem = document.createElement("li");
  newItem.textContent = "Item 1";
  list.prepend(newItem); // Adds "Item 1" before "Item 2"
</script>
```

### 5. Replacing Content

Using `replaceChild`
The `replaceChild()` method replaces an existing child node with a new one.

```html
<div id="container">
  <p id="old">Old Paragraph</p>
</div>
<script>
  const container = document.getElementById("container");
  const newPara = document.createElement("p");
  newPara.textContent = "New Paragraph";
  const oldPara = document.getElementById("old");
  container.replaceChild(newPara, oldPara);
</script>
```

---

### 6. Removing Content

Using `removeChild`
The `removeChild()` method removes a specified child node.

```html
<ul id="list">
  <li id="removeMe">Remove this</li>
  <li>Keep this</li>
</ul>
<script>
  const list = document.getElementById("list");
  const removeMe = document.getElementById("removeMe");
  list.removeChild(removeMe); // Removes the specified element
</script>
```

### Using `remove` (Modern Alternative)

The `remove()` method directly removes the selected element.

```html
<p id="para">Delete me</p>
<script>
  const para = document.getElementById("para");
  para.remove(); // Removes the paragraph
</script>
```

# Changing Attributes and Styles in the DOM

JavaScript provides ways to dynamically modify the attributes and styles of HTML elements. This is often used to update a webpage's appearance or behavior in response to user interaction or data changes.

---

### 1. Changing Attributes

Attributes define properties for HTML elements (e.g., `id`, `src`, `href`, `alt`). You can manipulate attributes using the following methods:

Using setAttribute
The setAttribute method is used to set a new attribute or update the value of an existing one.

```html
<img id="image" src="old.jpg" alt="Old Image" />

<script>
  const img = document.getElementById("image");
  img.setAttribute("src", "new.jpg"); // Changes the src attribute
  img.setAttribute("alt", "New Image"); // Changes the alt text
</script>
```

---

**Using** `getAttribute`
The `getAttribute` method retrieves the value of a specified attribute.

```html
<a id="link" href="https://example.com">Visit</a>

<script>
  const link = document.getElementById("link");
  console.log(link.getAttribute("href")); // Outputs: https://example.com
</script>
```

---

**Using Direct Property Access**
Most attributes can also be modified directly via their corresponding JavaScript properties.

```html
<input id="username" type="text" value="John Doe" />

<script>
  const input = document.getElementById("username");
  input.value = "Jane Doe"; // Updates the value directly
</script>
```

---

**Removing Attributes**
The `removeAttribute` method removes a specified attribute.

```html
<button id="btn" disabled>Click Me</button>

<script>
  const button = document.getElementById("btn");
  button.removeAttribute("disabled"); // Removes the disabled attribute
</script>
```

---

### 2. Changing Styles

---

You can dynamically update an element's CSS styles using JavaScript.

**Using the** `style` **Property**
The style property allows you to modify individual CSS properties directly.

```html
<h1 id="header">Hello World</h1>
<script>
  const header = document.getElementById("header");
  header.style.color = "blue"; // Changes text color to blue
  header.style.fontSize = "2rem"; // Sets font size to 2rem
</script>
```

- **Property Names:** Use camelCase for CSS properties (e.g., `backgroundColor` instead of `background-color`).

---

**Adding Multiple Styles**
You can add multiple styles using the `style` property:

```html
<div id="box">Box</div>
<script>
  const box = document.getElementById("box");
  box.style.cssText = "background-color: yellow; border: 2px solid black;";
</script>
```

---

**Using** `classList` **to Change Styles**
Instead of manually applying inline styles, you can add, remove, or toggle CSS classes to apply predefined styles.

```html
<div id="box" class="red-box">Box</div>
<style>
  .red-box {
    background-color: red;
  }
  .blue-box {
    background-color: blue;
  }
</style>
<script>
  const box = document.getElementById("box");
  box.classList.remove("red-box"); // Removes the 'red-box' class
  box.classList.add("blue-box"); // Adds the 'blue-box' class
</script>
```

---

**Toggling Classes**
The `classList.toggle` method adds a class if it doesn't exist and removes it if it does.

```html
<button id="btn">Toggle Highlight</button>

<p id="text">Some text</p>
<style>
  .highlight {
    color: yellow;
    background-color: black;
  }
</style>
<script>
  const button = document.getElementById("btn");
  const text = document.getElementById("text");
  button.addEventListener("click", () => {
    text.classList.toggle("highlight");
  });
</script>
```

---

**Getting Computed Styles**
You can retrieve the current applied styles (including those from CSS files) using getComputedStyle.

```html
<p id="para" style="color: red;">Hello!</p>
<script>
  const para = document.getElementById("para");
  const style = window.getComputedStyle(para);
  console.log(style.color); // Outputs: 'rgb(255, 0, 0)'
</script>
```

# Event Listeners in JavaScript

Event listeners allow JavaScript to respond to user actions or events on the page, such as clicks, keyboard input, form submissions, and more. The `addEventListener` method is commonly used to attach event listeners to elements.

---

## 1. Adding Event Listeners

**Syntax**

```javascript
element.addEventListener(event, function, options);
```

- `event:` The name of the event to listen for (e.g., `"click"`, `"keyup"`, `"submit"`).
- `function:` The function to execute when the event is triggered.
- `options:` Optional parameters like once (run the listener only once) or capture (control the event flow).

---

## Common Event Types

### A. `click` Event

Triggered when a user clicks an element.

```html
<button id="btn">Click Me</button>

<script>
  const button = document.getElementById("btn");
  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
</script>
```

---

### B. `keyup` Event

Triggered when a key is released on the keyboard.

```html
<input id="input" type="text" placeholder="Type something..." />

<script>
  const input = document.getElementById("input");
  input.addEventListener("keyup", (event) => {
    console.log(`Key released: ${event.key}`);
  });
</script>
```

---

### C. `submit` Event

Triggered when a form is submitted.

```html
<form id="form">
  <input type="text" name="username" placeholder="Username" />
  <button type="submit">Submit</button>
</form>
<script>
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert("Form submitted!");
  });
</script>
```

---

## 2. Other Useful Events

`mouseover` and `mouseout`

- `mouseover:` Triggered when the mouse pointer enters an element.
- `mouseout:` Triggered when the mouse pointer leaves an element.

```html
<div id="hoverBox" style="width: 100px; height: 100px; background: lightblue;">
  Hover me
</div>
<script>
  const box = document.getElementById("hoverBox");
  box.addEventListener("mouseover", () => {
    box.style.background = "lightgreen";
  });
  box.addEventListener("mouseout", () => {
    box.style.background = "lightblue";
  });
</script>
```

---

`keydown` and `keypress`

- `keydown:` Triggered when a key is pressed down.
- `keypress:` Similar to `keydown`, but deprecated; use `keydown` instead.

```html
<script>
  document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
  });
</script>
```

---

`focus` and `blur`

- `focus:` Triggered when an element gains focus (e.g., an input field).
- `blur:` Triggered when an element loses focus.

```html
<input id="inputField" type="text" placeholder="Focus on me" />

<script>
  const input = document.getElementById("inputField");
  input.addEventListener("focus", () => {
    console.log("Input field focused");
  });
  input.addEventListener("blur", () => {
    console.log("Input field lost focus");
  });
</script>
```

---

`change`
Triggered when the value of an input element changes.

```html
<select id="dropdown">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>
<script>
  const dropdown = document.getElementById("dropdown");
  dropdown.addEventListener("change", (event) => {
    console.log(`Selected value: ${event.target.value}`);
  });
</script>
```

## 3. Event Listener Options

**Using** `once`
The event listener runs only once and then is automatically removed.

```javascript
button.addEventListener(
  "click",
  () => {
    console.log("This will run only once");
  },
  { once: true }
);
```

---

**Using** `removeEventListener`
You can remove an event listener.

```javascript
function logClick() {
  console.log("Button clicked");
}
button.addEventListener("click", logClick);
button.removeEventListener("click", logClick); // Removes the listener
```

---

## 4. Event Propagation

- **Event Bubbling:** Events propagate from the target element up to its ancestors.
- **Event Capturing:** Events propagate from the document root down to the target element.

You can control this behavior using the `capture` option in `addEventListener`.

```javascript
element.addEventListener("click", callback, true); // Captures the event during the capturing phase
```

---

## 5. Event Object

The event listener receives an **event object** containing information about the triggered event.

```javascript
document.addEventListener("click", (event) => {
  console.log(event.target); // Element that was clicked
  console.log(event.type); // Type of event (e.g., "click")
});
```

---

### Practical Example: Interactive To-Do List

```html
<ul id="todoList"></ul>
<input id="taskInput" type="text" placeholder="Add a task" />
<button id="addTask">Add Task</button>

<script>
  const list = document.getElementById("todoList");
  const input = document.getElementById("taskInput");
  const button = document.getElementById("addTask");

  button.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
      const listItem = document.createElement("li");
      listItem.textContent = task;
      listItem.addEventListener("click", () => listItem.remove()); // Remove task on click
      list.appendChild(listItem);
      input.value = ""; // Clear the input
    }
  });
</script>
```
