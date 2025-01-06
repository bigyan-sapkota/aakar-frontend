# React.js: An Introduction

React.js is a JavaScript `library` for building user interfaces. It makes creating dynamic and interactive web applications more efficient and scalable.

### Why Use React?

- **Component-Based Architecture:** Build UI using reusable components.
- **Declarative Syntax:** Describe what the UI should look like at any given state.
- **Virtual DOM:** React updates only the changed parts of the UI, improving performance.
- **React Ecosystem:** Access to tools like React Router, Redux Toolkit, and TanStack Query.

---

## Key Concepts

### 1. Components

- **Functional Components** (simpler, preferred way in modern React)
- **Class Components** (older style, still worth knowing briefly)

**Example Functional Component**

```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}
export default Greeting;
```

### 2. JSX (JavaScript XML)

- A syntax extension that combines HTML-like code with JavaScript.
- Example:

```jsx
const element = <h1>Welcome to React!</h1>;
```

### 3. Props (Properties)

- Used to pass data to components.
- Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### 4. State

- A way to manage dynamic data in a component.
- Example using Hooks (`useState`):

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 5. Event Handling

- Adding interactivity using events like `onClick` and `onChange`.
- Example:

```jsx
function ButtonClick() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return <button onClick={handleClick}>Click Me!</button>;
}
```

---

## Basic Structure of a React Project

- `src/index.js`: Entry point for the app.
- `App.js`: Main application component.
- Components directory for reusable UI components.

---

## Styling in React.js

In React, you can style components in various ways, each suited for different needs and preferences.

---

**_ 1. Inline Styling _**
Directly apply styles using the style attribute in JSX. The style values are written as an object with camelCase properties.

**_ Example: _**

```jsx
function InlineStyleExample() {
  return (
    <h1 style={{ color: "blue", fontSize: "24px" }}>Hello, Inline Styling!</h1>
  );
}
```

---

**_ 2. CSS Stylesheets _**
Link a regular CSS file and apply class names to elements using the `className` attribute.

**_ Example CSS (styles.css): _**

```css
.header {
  color: green;
  font-size: 32px;
}
```

**_ React Component: _**

```jsx
import "./styles.css";

function CSSStyleExample() {
  return <h1 className="header">Hello, CSS Stylesheets!</h1>;
}
```

---

**_ 3. CSS Modules _**

CSS Modules scope styles locally by default, avoiding conflicts between components.

**_ Example CSS Module (Button.module.css): _**

```css
.button {
  background-color: coral;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
```

**_ React Component: _**

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

---

**_ 4. Styled Components (CSS-in-JS) _**

A popular library for writing CSS directly within JavaScript files.

**_ Installation: _**

```bash
npm install styled-components
```

**_ Example: _**

```jsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: tomato;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darkred;
  }
`;

function StyledComponentExample() {
  return <StyledButton>Styled Button</StyledButton>;
}
```

# Babel and Virtual DOM

### Babel in React.js

Babel is a `JavaScript compiler` that transforms modern JavaScript (ES6+) and JSX into browser-compatible code.

**_ Why Babel is Important for React? _**
**_ 1. JSX to JavaScript: _** React uses JSX, which is not directly understood by browsers. Babel compiles JSX into standard JavaScript.

**_ 2. Modern JavaScript Support: _** Babel converts ES6+ syntax into older versions (like ES5) to ensure compatibility with older browsers.

### Example: JSX Compilation with Babel

**_ JSX Code: _**

```jsx
const element = <h1>Hello, Babel!</h1>;
```

**_ Compiles to: _**

```js
const element = React.createElement("h1", null, "Hello, Babel!");
```

**_ Key Babel Features _**

**_ - Plugins: _** Extend Babel's functionality (e.g., `@babel/plugin-transform-arrow-functions`).
**_ - Presets: _** Group common plugins (e.g., `@babel/preset-react` for JSX and `@babel/preset-env` for modern JavaScript).

**_ Installing Babel (for React projects) _**

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
```

---

**_ Virtual DOM in React.js _**

The Virtual DOM is a lightweight copy of the real DOM that React uses to improve performance. It allows React to update the UI efficiently by minimizing direct interactions with the real DOM.

**_ How the Virtual DOM Works _**

1. When the state or props of a component change,
   React creates a new Virtual DOM tree.

2. React compares the new Virtual DOM with the previous one using a process called diffing.

3. Only the differences (minimal updates) are applied to the real DOM.

### Benefits of the Virtual DOM

- **_ Improved Performance: _** Direct manipulation of the real DOM is slow. The Virtual DOM reduces the frequency and cost of DOM updates.

- **_ Efficient Rendering: _** React updates only the parts of the DOM that changed instead of re-rendering the entire page.

**_ Example of Virtual DOM Efficiency _**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

Without Virtual DOM: Each update would involve re-rendering the entire div element.
With Virtual DOM: React compares the new and old Virtual DOM, updating only the <p> element displaying the count.

| **Virtual DOM**                                                                   | **Real DOM (Vanilla JS)**                                            |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Efficient Reconciliation**: Compares old and new VDOMs to find minimal changes. | Directly manipulates the DOM on each operation.                      |
| **Batch Updates**: Groups multiple changes into a single operation.               | Updates are made immediately, causing multiple reflows and repaints. |
| **Optimized Performance**: Only the changed nodes are updated.                    | Entire tree or subtree may be re-rendered even for small changes.    |
| **Declarative Syntax**: React manages how the UI should look based on state.      | **Imperative**: Developers manually specify how to update the DOM.   |
| **Reduces Browser Load**: Limits expensive layout recalculations.                 | Frequent and complex changes slow down rendering.                    |
