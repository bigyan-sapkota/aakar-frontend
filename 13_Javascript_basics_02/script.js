// let , const , var

// let myName = "Bigyan";
// myName = "Sunil";
// myName = 1;
// console.log(myName);

// console.log(myName);

// const a = "bigyan";

// let a;
// a = "Bigyan";
// console.log(a);

// For loop
// for (let i = 1; i <= 10; i++) {
//   const result = i * 2;
//   console.log("2 * ", i, " = ", result);
//   console.log(` 2 * ${i} = ${result}`);
// }

// while loop
// let i;
// i = 1;
// // console.log(i);
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 6;
// do {
//   console.log(i); // Outputs 0, 1, 2, 3, 4
//   i++;
// } while (i < 5);

const myArr = ["bigyan", "yugal", 3, 3.5, 10, 12, 14, "sunil"];
const firstElem = myArr[1];

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// for (let myElement of myArr) {
//   console.log(myElement);
// }

// const student = { rollNo: 12, name: "Bigyan", faculty: "bit" };
// // console.log(student.rollNo);

// for (let myElem in student) {
//   //   const student = { rollNo: 12, name: "Bigyan", faculty: "bit" }
// }

const fruits = ["banana", "apple", "orange", "mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

function add(a, b) {
  // checking if both a and b are of type number
  if (typeof a === "number" && typeof b === "number") {
    const result = a + b;
    console.log(result);
  }
}

add(2, 2);

// console.log(typeof "2");
// console.log(typeof 3);

// const num1 = 23;
// const num2 = 23;

// if (num1 === num2) {
//   console.log("a");
// } else {
//   console.log("b");
// }

// EX. 1 : make an array and print each element using for loop
// EX. 2 : make a function to add 2 numbers
// EX. 3 : make an array and print each element using forEach loop
