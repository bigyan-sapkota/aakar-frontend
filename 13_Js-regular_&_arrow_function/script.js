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

// logName("bigyan", "surname");

// ARROW FUNCTION : arguments usage will throw error
// Instead, we can use ...args
const logName2 = (...args) => {
  console.log(args);
};

// logName2("bigyan", "surname", 5, true);

// 2. Duplicate parameters ------------------

// REGULAR FUNCTION : you can give duplicate parameters (this will throw error in "use strict" mode)
// function regularAdd1(a, b, a) {
//   console.log(`Value of a is ${a} and value of b is ${b}`);
// }
// regularAdd1("first", "second", "third");

// ARROW FUNCTION : you can't use duplicate parameters
// const arrowAdd1 = (a, b, a) => {
//   console.log(`Value of a is ${a} and value of b is ${b}`);
// };

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

// class 2nd ------------------------------------------------------------
// IIFE (Immediately Invoked Function Expressions)
// REGULAR FUNCTION: it can be or can't be anonymous
// (function logger() {
//   console.log("This is a log message");
// })();

// ((a, b) => {
//   const result = a + b;
//   console.log(`The sum of ${a} and ${b} is : ${result}`);
// })(1, 2);

// const add = (a, b) => {
//   const result = a + b;
//   console.log(`The sum of ${a} and ${b} is : ${result}`);
// };

// add(1, 2);

// function add(a, b) {
//   return a + b;
// }

// const answer = add(3, 5);
// console.log(answer);

// const subtract = (a, b) => a - b;

// console.log(subtract(5, 3));

// const logger2 = (a) => console.log(a);
// logger2("Bigyan");

// const maths = 40;
// const science = 32;
// const social = 40;

// if (maths >= 32 && science >= 32 && social >= 32) {
//   console.log("Student passed in exam.");
// } else {
//   console.log("Student failed in exam");
// }

// const khana = "roti";
// const tarkari = "gundruk_jhol";

// if (
//   khana === "bhat" &&
//   (tarkari === "masu_jhol" || tarkari === "gundruk_jhol")
// ) {
//   console.log("Ma khana khanxu");
// }

// const monthNum = 1;

// switch (monthNum) {
//   case 1:
//     console.log("Jan");
//     break;

//   case 2:
//     console.log("Feb");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   case 4:
//     console.log("Apr");
//     break;

//   default:
//     console.log("Please enter a number below 13 and greater than 0");
//     break;
// }

// name : Bigyan Prasad Sapkota

// const myStr = "   My name is bigyan    ";
// console.log("2", myStr, "2");

// const product = "";

// if (product.trim()) {
//   console.log("There is a product");
// } else {
//   console.log("There is not a product");
// }

// TRUTHY AND FALSY

// TRUTHY :
// String: if there is value(even space), it is truthy

// FALSY:
// String: !string

// if the cart is empty  console.log(There is not item in the cart)
// if the cart is not empty show products

// STRING
// const firstNameVal = " ";
// const myName = firstNameVal.trim();

// if (myName) {
//   console.log("Name exists");
// }

// if (!myName) {
//   console.log("There is not name");
// }

// NUMBER
// 0 is falsy
// null is falsy
// undefined is falsy
// -0 is falsy
// NaN is falsy
// num = 0;
// if (NaN) {
//   console.log("Hello");
// }

// const product = [];
// const productLength = product.length;

// if (productLength) {
//   console.log(product);
// } else {
//   console.log("There is not a product");
// }

// if (0) {
//   console.log("Hello 1");
// }

// if (1) {
//   console.log("Hello 2");
// }

const person = {
  girlFriend: "Sita",
  surname: "Sharma",
};

// person.getDetails();
const personKeysArr = Object.keys(person);
console.log(personKeysArr);

if (personKeysArr.length) {
  console.log("There is a person");
} else {
  console.log("There is not a person");
}
