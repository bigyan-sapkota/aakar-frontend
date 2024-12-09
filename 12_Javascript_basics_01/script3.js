// JS data types

// --------------------------- PRIMITIVE DATA TYPES (Contains single value) ---------------------------
// 1. String
const surname = "Magar";
// console.log(surname);
// console.log(typeof surname); // output : string

// 2. Number
const myNum = 12;
const myNum2 = 13.3;
// console.log(`First Number = ${myNum} and second Number = ${myNum2}`);
// console.log(typeof myNum, typeof myNum2); // output : number, number

// 3 . Boolean
let pass = true;
pass = false;
// console.log(pass);
// console.log(typeof pass);

// 4. Undefined
let x;
// console.log(x);
// console.log(typeof x);

// 5. null
const nullData = null;
// console.log(nullData);
// console.log(typeof nullData); // output : object

const sym1 = Symbol();
// console.log(sym1);

const sym2 = Symbol("bigyan");
const sym3 = Symbol("bigyan");

// console.log("bigyan" == "bigyan");
// console.log(1 == 1);
// console.log(sym2 === sym3); // false

// -------------------------- NON-PRIMITIVE DATA TYPES (can store multiple values) ----------------

// 1. Objects
const student = {
  rollNo: 12,
  name: "Asim Thapa Chettri",
  class: 16,
  faculty: "BIT",
};

// console.log(typeof student);

// Although the object is initialized using const, we can add key value and even change their value

// student.phone = "98423244343";
// student.phone = "1234";
// console.log(student);
// console.log(student.rollNo, student.name);

// 2. Array
const fruits = ["apple", "banana", "mango", "orange", 1];
// fruits[1] = 5;
// console.log(fruits);
// console.log(fruits[2]);
// console.log("fruits type", typeof fruits); // output: object

// 3. Function
function sayMyName() {
  //   console.log("My Name is Asim");
}
// console.log(sayMyName()); // gives undefined, because it has no return
// console.log(function sayMyName() {
//   console.log("My Name is Asim");
// });

// console.log("sayMyName type : ", typeof sayMyName); // output : function

// Date, Map, Set
const customDate = new Date();
// console.log(date);
const customMap = new Map();
const customNumber = [
  1, 2, 3, 4, 5, 2, 1, 3, 4, 5, 6, 10, 12, 11, 13, 12, 5, 10,
];
const customSet = new Set(customNumber);
// console.log(customSet);
// console.log(typeof customDate, typeof customMap, typeof customNumber); // output: object, object, object

// TYPES are dynamic
let i = 5; // as number
i = "Bigyan"; // as string
i = undefined; // as undefined

// To initialize a string
// let aSentence = "Bigyan's lapotop is Lenovo";
// let anotherSentence = 'Bigyan said to his student, "Read Javascript"';

let a = 1 + 2;
// console.log(a);

let k = 1 + 2 + "Bigyan";
// console.log(k);

const m = 1 + 2;
let l = "Bigyan" + m;
// console.log(l);