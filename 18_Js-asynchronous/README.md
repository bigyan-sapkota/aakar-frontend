# Asynchronous Programming in JavaScript

Asynchronous programming in JavaScript allows you to handle tasks that take time, such as fetching data from an API, reading a file, or waiting for user input, without blocking the execution of other code. JavaScript achieves this through several mechanisms:

---

### 1. Callbacks

A callback is a function passed as an argument to another function, which is then executed once an asynchronous task is complete.

**Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Callback executed");
});
```

---

### 2. Callbacks

Promises are objects that represent a value that might be available now, or in the future, or never. Promises have three states:

- **Pending:** Initial state
- **Fulfilled:** The operation completed successfully
- **Rejected:** The operation failed

**Example:**

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 3. Async/Await

`async`/`await` is syntactic sugar built on promises, making asynchronous code look and behave more like synchronous code. It improves readability and is widely used.

**Example:**

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(data);
}

getData();
```

---

### 4. Event Loop

The event loop is at the heart of asynchronous programming in JavaScript. It continuously monitors the call stack and task queue, executing tasks in the right order.

**1. Call Stack:** Keeps track of function calls.
**2. Task Queue:** Queues asynchronous callbacks.
**3. Microtask Queue:** Queues tasks like promises (.then handlers).

**Example of Event Loop Behavior:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// OUTPUT :
// Start
// End
// Promise
// Timeout
```

---

### 5. Real-World Use Cases

- **API Calls:**

```javascript
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}

fetchUsers();
```

- **File Operations(Node.js):**

```javascript
const fs = require("fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("example.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFile();
```

---

- **Avoid Callback Hell:** Use promises or async/await to simplify nested callbacks.
- **Error Handling:** Use .catch() for promises or try-catch blocks for async/await.
- **Performance:** Use Promise.all to execute multiple promises concurrently.

**Example:**

```javascript
const promise1 = Promise.resolve("Promise 1");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2"), 1000)
);

Promise.all([promise1, promise2]).then((results) => {
  console.log(results); // ["Promise 1", "Promise 2"]
});
```

# Try and Catch in Javascript

The `try` and `catch` block in JavaScript is used for error handling. It allows you to execute code and "catch" errors that occur during execution, preventing them from crashing the program.

---

### Syntax

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Optional block to run code regardless of the outcome
}
```

---

### Example:

```javascript
try {
  let result = 10 / 0; // No error
  console.log("Result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Execution completed.");
}
```

---

## Handling Runtime Errors

You can use `try` and `catch` to handle runtime errors caused by invalid operations, undefined variables, or function calls.

**Example:**

```javascript
try {
  let undefinedVariable;
  console.log(undefinedVariable.toString()); // Throws an error
} catch (error) {
  console.error("Caught an error:", error.message);
}

// OUTPUT : Caught an error: Cannot read properties of undefined (reading 'toString')
```

---

## Throwing Custom Errors

You can use the `throw` statement to create and handle your own errors.

**Example:**

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above.");
  }
  console.log("Access granted.");
}

try {
  checkAge(16);
} catch (error) {
  console.error("Error:", error.message);
}

// OUTPUT : Error: Age must be 18 or above.
```

---

## `finally` Block

The `finally` block runs regardless of whether the `try` block succeeds or the `catch` block handles an error.

**Example:**

```javascript
try {
  console.log("Trying...");
  throw new Error("An error occurred!");
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Cleaning up...");
}
// Trying...
// Error caught: An error occurred!
// Cleaning up...
```

---

## Nested `try` and `catch`

You can nest try and catch blocks to handle errors in a more granular way.

**Example:**

```javascript
try {
  try {
    let x = undefinedVariable; // Causes an error
  } catch (innerError) {
    console.error("Inner error:", innerError.message);
    throw new Error("Outer error caused by inner failure.");
  }
} catch (outerError) {
  console.error("Outer error:", outerError.message);
}
```

---

## Using `try/catch` with `async/await`

When working with asynchronous code, `try` and `catch` are often used to handle errors in `async` functions.

### Example:

```javascript
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchData();
```

---

## Best Practices

1. **Be Specific in the `try` Block:** Only wrap code that may throw an error.
2. **Use Meaningful Error Messages:** Throw custom errors with clear and descriptive messages.
3. **Avoid Silent Failures:** Always handle or log the error.
4. **Use `finally` for Cleanup:** Release resources, close connections, etc.

---

## Real-World Use Case: File Reading (Node.js)

```javascript
const fs = require("fs/promises");

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Failed to read file:", error.message);
  } finally {
    console.log("Operation complete.");
  }
}

readFile("example.txt");
```

---

# Promises in Javascript

A **Promise** is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more elegant way to handle asynchronous operations compared to callbacks, avoiding issues like **callback hell.**

---

### States of Promise

A promise can be in one of the three states:

**1. Pending:** Initial state, the operation is not yet completed.
**2. Fulfilled:** The operation was completed successfully.
**3. Rejected:** The operation failed.

Once a promise transitions from pending to either fulfilled or rejected, it is considered "settled," and its state cannot change again.

---

You create a promise using the `Promise` constructor, which takes a function (executor) with two arguments:

- `resolve`: Call this to mark the promise as fulfilled.
- `reject`: Call this to mark the promise as rejected.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});
```

---

### Using Promises

You handle the promise's resolution or rejection using `.then()` and `.catch()` methods.

**Basic Example:**

```javascript
myPromise
  .then((message) => {
    console.log("Fulfilled:", message);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });
```

### Chaining Promises:

You can chain .then() methods to execute multiple asynchronous operations sequentially.

```javascript
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then((data) => {
    console.log(data);
    return "Processing data";
  })
  .then((result) => {
    console.log(result);
    return "Data processed";
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

---

### Static Methods

**1.** `Promise.resolve(value)`
Creates a promise that is immediately resolved with the given value.

```javascript
Promise.resolve("Resolved immediately").then((value) => console.log(value));
```

**2.** `Promise.reject(reason)`
Creates a promise that is immediately rejected with the given reason.

```javascript
Promise.reject("Rejected immediately").catch((error) => console.error(error));
```

**3.** `Promise.all(iterable)`
Takes an array of promises and returns a single promise that resolves when all promises in the array are resolved. If any promise is rejected, the returned promise is also rejected.

```javascript
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values)) // ["First", "Second", "Third"]
  .catch((error) => console.error(error));
```

**4.** `Promise.allSettled(iterable)`
Returns a promise that resolves after all promises in the array have settled (either resolved or rejected). It never rejects.

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results)
);
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Error" }
// ]
```

**5.** `Promise.race(iterable)`
Returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

```javascript
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 500)
);

Promise.race([promise1, promise2]).then((value) => console.log(value)); // "Second"
```

**6.** `Promise.any(iterable)`
Returns a promise that resolves as soon as one of the promises resolves. It rejects only if all promises are rejected.

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("First success"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Second success"), 1000)
);

Promise.any([promise1, promise2, promise3])
  .then((value) => console.log(value)) // "First success"
  .catch((error) => console.error(error));
```

---

Always include a `.catch()` block to handle rejected promises.

**Example:**

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => reject("Failed to fetch data"), 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("Operation completed."));
```

---

## Benefits of Promises

1. **Improved readability** compared to nested callbacks.
2. **Error propagation** is straightforward with `.catch()`.
3. Can handle multiple asynchronous tasks using `Promise.all` and related methods.

Promises have become an essential part of modern JavaScript programming and are the foundation for `async/await` syntax, which further simplifies working with asynchronous code.
