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

// const fruitList = fruits.map((fruit, i, arr) => {
//   return `${i + 1}. ${fruit}`;
// });

// console.log(fruitList);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numbersInto2 = numbers.map((num, i) => num * 2);

// const showIndex = numbers.map((_, __, arr) => arr);

// console.log(numbersInto2);
// console.log(showIndex);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numInto3 = myNum.map((num) => num * 3);

// console.log(numInto3);

// let's multiply the number with 2 at first and 3 later
// const numInto60 = myNum
//   .map((num) => num * 2)
//   .map((num) => num * 3)
//   .map((num) => num * 10);

// console.log(numInto60);

// const foods = [
//   { name: "🍎 Apple", type: "fruit" },
//   { name: "🍌 Banana", type: "fruit" },
//   { name: "🍔 Burger", type: "fast food" },
//   { name: "🍇 Grapes", type: "fruit" },
//   { name: "🍟 Fries", type: "fast food" },
//   { name: "🥦 Broccoli", type: "vegetable" },
// ];

// const onlyFastFood = foods.map((item) => {
//   return { item, isFastFood: item.type === "fruit" };
// });

// filter() : it is used to get array of specific items
// const onlyFastFood = foods.filter((item) => item.type === "fast food");
// console.log(onlyFastFood);

// find() : it is used to get only object from array
// const getApple = foods.find((item) => item.name === "🍎 Apple");
// console.log(getApple);

// reduce()
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let sum = 0;

// myNumbers.forEach((item) => (sum += item));

// console.log(sum);

// let initialValue = 0;

// const myTotal = myNumbers.reduce(function (accumulator, currentValue) {
//   console.log(
//     `accumulator is : ${accumulator} and currentValue is : ${currentValue}`
//   );
//   return accumulator + currentValue;
// }, initialValue);

const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Ukhu", category: "Juice" },
  { name: "Lettuce", category: "Vegetable" },
  { name: "Mosambi", category: "Juice" },
];

// Fruit : ["Apple", "Orange"], Vegetable : ["Onion", "Lettuce"]

const groupedItems = items.reduce((acc, elm) => {
  const category = elm.category;

  // if there is not item in array for certain category, an array is added

  // if(!"Fruit"){
  //   "Fruit" = []
  // }

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push(elm.name);
  return acc;
}, {});

console.log(groupedItems);
