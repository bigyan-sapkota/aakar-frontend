// Map() object in js

// const student = {
//   name: "Bigyan Sapkota",

//   grandFatherAge: 10,

//   isGrandFatherDead: function () {
//     if (this.grandFatherAge > 100) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// console.log(student.isGrandFatherDead());

// console.log(this);

// 1. For of loop for string
// const myName = "Bigyan Sapkota";
// for (const letter of myName) {
//   console.log(letter);
// }

// 2. Map()
// const map = new Map();
// console.log(map);

// map.set("name", "Asim");
// map.set(25, 25);
// console.log(map);

// // check existence
// console.log(map.has("name"));

// // console.log(map.delete("name"));
// console.log(map.get("name"));
// // console.log(map);

// HIGHER ORDER FUNCTION : function that has a function as a parameter

// 1. forEach()
// const fruits = [
//   "🍎 Apple",
//   "🍌 Banana",
//   "🍒 Cherry",
//   "🍇 Grapes",
//   "🥭 Mango",
//   "🍊 Orange",
//   "🍑 Peach",
//   "🍍 Pineapple",
//   "🍓 Strawberry",
//   "🍉 Watermelon",
// ];

// fruits.forEach(function (fruit, index, arr) {
//   console.log(`${index + 1}. ${fruit}`);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// numbers.forEach((item) => {
//   sum = sum + item;
// });
// console.log(sum);

// 2. map()
// const fruits = [
//   { name: "Apple", emoji: "🍎" },
//   { name: "Banana", emoji: "🍌" },
//   { name: "Cherry", emoji: "🍒" },
//   { name: "Grapes", emoji: "🍇" },
//   { name: "Mango", emoji: "🥭" },
//   { name: "Orange", emoji: "🍊" },
//   { name: "Peach", emoji: "🍑" },
//   { name: "Pineapple", emoji: "🍍" },
//   { name: "Strawberry", emoji: "🍓" },
//   { name: "Watermelon", emoji: "🍉" },
// ];

// console.log(fruits[9]);
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

const fruits = [
  "🍎 Apple",
  "🍌 Banana",
  "🍒 Cherry",
  "🍇 Grapes",
  "🥭 Mango",
  "🍊 Orange",
  "🍑 Peach",
  "🍍 Pineapple",
  "🍓 Strawberry",
  "🍉 Watermelon",
];

const fruitList = fruits.map((fruit, i, arr) => {
  return `${i + 1}. ${fruit}`;
});

// console.log(fruitList);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numbersInto2 = numbers.map((num, i) => num * 2);

// const showIndex = numbers.map((_, __, arr) => arr);

// console.log(numbersInto2);
// console.log(showIndex);
