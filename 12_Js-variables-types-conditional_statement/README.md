# let, const & var

In JavaScript, `var`, `let`, and `const` are used to declare variables. Each has its own use case and behavior:

### 1. var (Function-scoped)

- **Scope:** `var` is function-scoped, meaning it is accessible throughout the function in which it is declared.
- **Hoisting:** Variables declared with `var` are hoisted, meaning they are moved to the top of their scope and initialized with `undefined`.
- **Re-declaration:** Can be re-declared and updated within the same scope.

```javascript
function example() {
  console.log(a); // undefined (hoisted)
  var a = 10;
  console.log(a); // 10
}
example();

if (true) {
  var x = 20; // Scoped to the function or global scope
}
console.log(x); // 20 (accessible outside the block)
```

**Use Case:** Rarely used in modern JavaScript due to issues with scope leakage.

### 2. let (Block-scoped)

- **Scope:** let is block-scoped, meaning it is only accessible within the block ({}) where it is defined.
- **Hoisting:** Variables declared with let are hoisted but are not initialized. Accessing them before declaration throws a ReferenceError.
- **Re-declaration:** Cannot be re-declared in the same scope but can be updated.

```javascript
if (true) {
  let y = 30;
  console.log(y); // 30
}
console.log(y); // ReferenceError: y is not defined

let z = 40;
z = 50; // Allowed
console.log(z); // 50
```

**Use Case:** Preferred for variables that need to be reassigned but should remain confined to their block scope.

### 3. `const` (Block-scoped, Immutable Binding)

- **Scope:** Like `let`, `const` is block-scoped.
- **Hoisting:** Variables declared with `const` are hoisted but are not initialized. Accessing them before declaration throws a `ReferenceError`.
- **Re-declaration:** Cannot be re-declared or updated.
- **Mutability:** The variable's binding is constant, but the content of objects and arrays can still be mutated.

```javascript
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.1415; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifying the content
console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6]; // Error: Assignment to constant variable
```

**Use Case:** Use `const` by default unless you anticipate the variable will be reassigned.

## When to Use Each

- `const`: Default choice for most variables. It ensures immutability and avoids accidental reassignments.
- `let`: Use when the variable needs to be reassigned, such as in loops or conditions.
- `var`: Avoid using `var`. It’s mostly for legacy code.

**Example**

```javascript
const maxItems = 5; // Constant, won't change
let count = 0; // Will be updated
for (let i = 0; i < maxItems; i++) {
  count++;
  console.log(`Count: ${count}`);
}
// console.log(i); // ReferenceError: i is not defined
```

Use `let` and `const` for cleaner, more predictable code!

# Data Types

JavaScript has two categories of data types: primitive and non-primitive (reference types).

---

## Primitive Data Types

Primitive data types represent single values and are immutable.

### 1. String

- Represents text.
- Example:

```javascript
let name = "John";
```

### 2. Number

- Represents both integers and floating-point numbers.
- Example:

```javascript
let age = 25;
let price = 99.99;
```

### 3. Boolean

- Represents a logical value: `true` or `false`.
- Example:

```javascript
let isLoggedIn = true;
```

### 4. Undefined

- A variable declared but not assigned a value.
- Example:

```javascript
let x; // undefined
```

### 5. Null

- Represents the absence of any object value (explicitly assigned).
- Example:

```javascript
let y = null;
```

### 6. BigInt

- Used for integers larger than Number.MAX_SAFE_INTEGER (2⁵³ - 1).
- Example:

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
```

### 7. Symbol

- Represents a unique and immutable identifier.
- Example:

```javascript
let sym = Symbol("unique");
```

---

## Non-Primitive (Reference) Data Types

These types are mutable and can hold multiple values.

### 1. Object

- Represents a collection of key-value pairs.
- Example:

```javascript
let person = { name: "John", age: 25 };
```

### 2. Array

- Represents an ordered list of values (indexed).
- Example:

```javascript
  Copy code
  let colors = ["red", "green", "blue"];
```

### 3. Function

- Represents a reusable block of code.
- Example:

```javascript
function greet() {
  console.log("Hello!");
}
```

### 4. Date

- Represents dates and times.
- Example:

```javascript
let now = new Date();
```

### 5. Map and Set

- `Map`: Key-value pairs with unique keys.
- `Set`: Unique values collection.
- Example:

```javascript
let map = new Map();
let set = new Set();
```

---

## Type Checking

You can check a data type using `typeof`:

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (a known JavaScript quirk)
console.log(typeof undefined); // undefined
```

# LOOPS

JavaScript provides several types of loops to perform repetitive tasks. Here’s an overview of the loops and how to use them:

## 1. `for` Loop

Used when you know the number of iterations in advance.

**Syntax:**

```javascript
for (initialization; condition; increment / decrement) {
  // Code to execute
}
```

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}
```

## 2. `while` Loop

Used when the number of iterations is not known in advance; it runs while the condition is true.

**Syntax:**

```javascript
while (condition) {
  // Code to execute
}
```

**Example:**

```javascript
Copy code
let i = 0;
while (i < 5) {
console.log(i); // Outputs 0, 1, 2, 3, 4
i++;
}
```

### 3. `do...while` Loop

Similar to the while loop, but guarantees at least one execution of the loop body before checking the condition.

**Syntax:**

```javascript
do {
  // Code to execute
} while (condition);
```

**Example:**

```javascript
let i = 0;
do {
  console.log(i); // Outputs 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

### 4. `for...of` Loop

Used to iterate over iterable objects like arrays, strings, or sets.

**Syntax:**

```javascript
for (let element of iterable) {
  // Code to execute
}
```

**Example:**

```javascript
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color); // Outputs "red", "green", "blue"
}
```

### 5. `for...in` Loop

Used to iterate over the properties (keys) of an object.

**Syntax:**

```javascript
for (let key in object) {
  // Code to execute
}
```

**Example:**

```javascript
let person = { name: "John", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Outputs "name: John" and "age: 25"
}
```

### 6. `break` Statement

Used to exit a loop prematurely.

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // Outputs 0, 1, 2
}
```

### 7. `continue` Statement

Skips the current iteration and moves to the next.

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Outputs 0, 1, 3, 4
}
```

### 8. `forEach()` Method

A method specifically for arrays, allowing iteration over elements.

**Syntax:**

```javascript
array.forEach((element, index) => {
  // Code to execute
});
```

**Example:**

```javascript
let numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num); // Outputs 1, 2, 3
});
```

## Choosing the Right Loop:

- `for`: When you know how many times you need to iterate.
- `while`: When you don’t know the number of iterations in advance.
- `for...of`: For iterating over values in iterable objects.
- `for...in`: For iterating over object properties.
