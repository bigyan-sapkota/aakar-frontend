// "use strict";
// const myName = "bigyan";

// giving default value to arguments
// function add(a = 1, b = 2) {
//   console.log(a + b);
// }
// add(undefined, 5);

// ARGUMENTS
// function subtract(a, b) {
//   console.log(a - b);

//   //   to log value of a and b :
//   console.log(a, b);
//   console.log(arguments);
// }
// subtract(3, 2);

// ARROW FUNCTIONS
// function logName() {
//   console.log("Bigyan");
// }
// logName();

// const logName = () => {
//   console.log("Bigyan");
// };
// logName();

// const add = (a, b) => {
//   const result = a + b;
//   return result;
// };

// const answer = add(1, 2);
// console.log(answer);

// console.log(this);

// DIFFERENCE BETWEEN ARROW AND REGULAR FUNCTION

// 1. Arguments --------------------------

// REGULAR FUNCTION : arguments are shown
function logName(a, b) {
  console.log(arguments);
}

logName("bigyan", "surname");

// ARROW FUNCTION : arguments usage will throw error
// Instead, we can use ...args
const logName2 = (...args) => {
  console.log(args);
};

logName2("bigyan", "surname", 5, true);

// 2. Duplicate parameters ------------------

// REGULAR FUNCTION : you can give duplicate parameters (this will throw error in "use strict" mode)
function regularAdd1(a, b, a) {
  console.log(`Value of a is ${a} and value of b is ${b}`);
}
regularAdd1("first", "second", "third");

// ARROW FUNCTION : you can't use duplicate parameters
const arrowAdd1 = (a, b, a) => {
  console.log(`Value of a is ${a} and value of b is ${b}`);
};

// 3. HOISTING -------------------------------
// REGULAR FUNCTION : They are hoisted on top level. They can be accessed even before their declaration

// regularFunction();

function regularFunction() {
  console.log("Hello world");
}

// ARROW FUNCTION : They are not hoisted on top level.
// arrowFunction(); // this will throw error
const arrowFunction = () => {
  console.log("this is an arrow function");
};

// 4. this KEYWORD BINDING------------------

// console.log(this);

// // REGULAR FUNCTION
// function regularFunction2() {
//   console.log(this);
// }

// // ARROW FUNCTION
// const arrowFunction2 = () => {
//   console.log(this);
// };

// regularFunction2();
// arrowFunction2();

const student = {
  nam: "Asim Thapa Chettri",
  rollNo: "5",

  namDekhau: function () {
    console.log(this.nam);
  },

  namDekhaisyo: () => {
    console.log(this);
  },
};

// student.namDekhau();
// student.namDekhaisyo();

// 5. 'new' keyword
// function regularFunction3(name) {
//   this.name = name;
//   console.log(this);
// }

// const arrowFunction3 = (color) => {
//   this.color = color;
//   console.log(this);
// };

// new regularFunction3("Bigyan Sapkota");
// new arrowFunction3("red");
