// 1. Callback ------------------------------

// const hello = () => console.log("hello 2");
// setTimeout(hello, 2000);

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data Fetched");
//     callback();
//   }, 2000);
// }

// fetchData(() => {
//   console.log("hello");
// });

// console.log(fetchData);

// 2. Promises : state (pending, fulfilled , rejected)

// const fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(() => {
//       console.log("hello");
//     });
//   }, 2000);
// });

// fetchData
//   .then((data) => {
//     console.log("data");
//   })
//   .catch((err) => {
//     console.log(error);
//   });

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 0");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   console.log(users);
// }

// fetchUsers();

// const promise1 = Promise.resolve("Promise 1");
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => res("Promise 2"), 1000);
// });

// Promise.all([promise1, promise2]).then((results) => {
//   console.log(results);
// });

// class MathUtils {
//   show() {
//     console.log("I am maths");
//   }

//   static add(a, b) {
//     console.log("The sum is : ", a + b);
//   }
// }

// PROMISES --------------------------------

// Promise.resolve("Resolved immediately").then((value) => console.log(value));

// Promise.reject("Reject immediately").catch((err) => console.log(err));

// const promise1 = Promise.resolve("First");
// const promise2 = Promise.resolve("second");
// const promise3 = Promise.resolve("third");

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise1 = Promise.resolve("Success");
// const promise2 = Promise.reject("Error");

// Promise.allSettled([promise1, promise2]).then((results) => {
//   console.log("result");
// });

// try {
//   let undefinedVariable;
//   console.log(undefinedVariable.toString()); // Throws an error
// } catch (error) {
//   console.error("HajurKO error ayeko xa:", error.message);
// }

// function checkAge(age) {
//   if (age < 18) {
//     throw new Error("Age must be 18+");
//   }
//   console.log("Access granted");
// }

// try {
//   checkAge(16);
// } catch (error) {
//   console.error("Error : ", error.message);
// }
