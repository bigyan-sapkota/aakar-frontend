# `useEffect` Hook

The `useEffect` hook in React is a core feature used to handle side effects in functional components. Side effects include things like data fetching, setting up a subscription, manually changing the DOM, or updating the document title—tasks that don’t directly calculate a component's output.

Here’s a deep explanation and multiple examples to guide you through:

### 1. Basic Syntax

```javascript
useEffect(() => {
  // Code to run the side effect
  return () => {
    // Cleanup function (optional)
  };
}, [dependencyArray]);
```

### Parameters

- **Effect Function:** The main logic that performs the side effect.
- **Cleanup Function:** An optional function returned by useEffect to clean up resources when the component unmounts or before running the effect again.
- **Dependency Array:** Controls when the effect runs by specifying variables that the effect depends on.

---

### Example 1: Changing the Document Title

```javascript
import React, { useEffect, useState } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Runs only when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**Explanation:**

- `useEffect` runs when the `count` state changes, updating the document title.
- The dependency array `[count]` ensures the effect runs only when `count` changes.

---

**Example 2: Fetching Data**

```javascript
import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []); // Empty array runs effect only on mount

  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Explanation:**

- The `fetch` API is used to load data when the component mounts (since the dependency array is `[]`).
- `useEffect` will only run once on mount.

---

### Example 3: Cleanup in useEffect

```javascript
import React, { useEffect, useState } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []); // Runs only on mount and unmount

  return <p>Window width: {width}px</p>;
}
```

**Explanation:**

- The `handleResize` function updates the state when the window is resized.
- The cleanup function removes the event listener when the component unmounts to prevent memory leaks.

---

### Example 4: Multiple Dependencies

```javascript
useEffect(() => {
  console.log("Effect runs when count or color changes");
}, [count, color]); // Runs when either count or color changes
```

---

### Common Patterns and Tips

**1. Avoid Infinite Loops**
Not providing a dependency array (`useEffect(() => { /_ logic _/ })`) will run on every render. This can cause performance issues.

```javascript
useEffect(() => {
  setCount(count + 1); // BAD! Causes an infinite loop
});
```

**2. Run Effect Once**
Use an empty dependency array (`[]`) to run an effect only once after the component mounts.

```javascript
useEffect(() => {
  console.log("Runs once when the component mounts");
}, []);
```

**3. Dynamic Dependencies**
Use specific state or props in the dependency array to control when an effect runs.

```javascript
useEffect(() => {
  console.log('Runs only when "userId" changes');
}, [userId]);
```

**4. Cleanup Side Effects**
Always clean up resources in the return function to prevent memory leaks.

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(interval); // Cleans up on unmount
}, []);
```

---

### When to Use useEffect

- Fetching data from APIs.
- Listening to events (e.g., window resize).
- Setting up timers or intervals.
- Interacting with browser APIs (like document.title).

---

# Prop drilling

Prop drilling in React refers to the process of passing data from a parent component to a deeply nested child component through multiple intermediate components that do not need the data themselves. It happens when components in the middle of the hierarchy are only used as a conduit to pass props down to the required component.

Example of Prop Drilling

```jsx
const App = () => {
  const user = "John Doe"; // Data to pass down

  return <Parent user={user} />;
};

const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <h1>Hello, {user}!</h1>;
};
```

In this example, the `user` prop is passed from `App` to `Parent` and then to `Child`, even though `Parent` does not use the prop. This is a simple case, but in complex applications, prop drilling can make code harder to maintain.

### Downsides of Prop Drilling

- **Unnecessary complexity:** Components that don’t need the data must handle it.
- **Reduced readability:** It can be hard to follow the data flow in large applications.

### Solutions to Avoid Prop Drilling

**1. Context API:** Provides a way to share values between components without explicitly passing props through every level.
**2. State management libraries:** Tools like Redux, Zustand, or Recoil help manage state globally.
**3. Component composition or hooks:** For more localized solutions.

---

# `useContext` Hook

The `useContext` hook in React is used to consume a context in functional components. It provides a way to share values like state or functions between components without manually passing props through every level of the component tree.

## Steps to Use `useContext`

Create a Context using `React.createContext()`.
Provide the Context value at a higher level using a `Context.Provider`.
Consume the Context using the `useContext` hook in child components.

## Full Example of `useContext`

This example demonstrates sharing a theme (light or dark) between multiple components.

**1. Create a Context**

```jsx
import React, { useState, createContext, useContext } from "react";

// Create a ThemeContext
const ThemeContext = createContext();
```

**2. Provide Context Value in a Parent Component**

```jsx
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <h1>Toolbar</h1>
      <ThemeSwitcher />
    </div>
  );
};
```

**3. Consume Context Value in a Child Component**

```jsx
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use context

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
```

### Explanation

1. `ThemeContext` is created with `createContext()`.
2. `ThemeContext.Provider` wraps the `Toolbar` component in `App`, providing the `theme` and `toggleTheme` function to all children.
3. `ThemeSwitcher` uses `useContext(ThemeContext)` to access the context and update the theme when the button is clicked.

### Benefits

- Avoids **prop drilling** by sharing data directly between components.
- Keeps components more **maintainable** and **readable.**
