// 1. CREATING CLASS AND OBJECT
// class Student {
//   padai() {
//     console.log("aba js padam");
//   }
// }

// const bigyan = new Student();
// bigyan.padai();

// 2. constructor and fields/properties------------------------------------------------
// class Person {
//   constructor(username, age) {
//     this.username = username; //field
//     this.age = age; // field
//   }

//   // method
//   greet(fac) {
//     console.log(`Hi ${this.username}(age ${this.age})`);
//     // console.log("Hi ", this.username, "(age", this.age, ")");
//   }
// }

// const bigyan = new Person("bigyan", 22);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet(greetedBy) {
//     this.friend = greetedBy;
//     console.log(`Hello ${this.name}, I am ${greetedBy}`);
//   }
// }

// const bigyan = new Person("bigyan");
// bigyan.greet("Asim");
// console.log("after greet", bigyan);

// 3. static method -------------------
// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }

//   static subtract(a, b) {
//     return a - b;
//   }
// }

// console.log(MathUtils.add(1, 2));

// class Example {
//   static sayHello() {
//     return "Hello!";
//   }
// }

// const obje = new Example();
// console.log(Example.sayHello());
// obje.sayHello(); // this throws error

// 5. Inheritance -------------------------------
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   sound() {
//     console.log(`${this.name}, the ${this.breed}, barks`);
//   }
// }

// const husky = new Dog("Husky", "Snow ");
// husky.sound();

// class Parent {
//   static greet() {
//     console.log("Hello from parent");
//   }
// }

// class Child extends Parent {}
// Child.greet();

// 6. public, protected and private -------------------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello , I'm ${this.name}`);
//   }
// }
// const bigyan = new Person("bigyan", 22);
// console.log(bigyan.age);
// bigyan.greet();
// console.log(bigyan.name);

// const bigyan = {
//   name: "bigyan",
//   age: 22,
// };

// const asim = new Person("asim", 22);

// private
// class Facebook {
//   #password;

//   constructor(id, password) {
//     this.id = id;
//     this.#password = password;
//   }

//   authenticatePassword() {
//     let str;
//     if (this.#password === "1234") {
//       str = "Correct password";
//     } else {
//       str = "Incorrect password";
//     }
//     return str;
//   }
// }

// const rupak = new Facebook("bigyan@gmail.com", "1234");
// console.log(rupak.authenticatePassword());

// protected
// class Parent {
//   constructor() {
//     this._protectedField = "I'm protected";
//   }

//   showProtectedField() {
//     console.log(this._protectedField);
//   }
// }

// class Child extends Parent {
//   accessProtectedField() {
//     console.log(this._protectedField);
//   }
// }

// const child = new Child();
// child.showProtectedField();
// child.accessProtectedField();
// console.log(child._protectedField);

// FRIDAY ----------
// const person = {
//   name: "Bigyan",
//   age: 30,
//   isEmployed: false,
// };
// console.log(person);

// This is not a good practice
// const person = new Object(); //const person = {}

// person.name = "Bigyan";
// person.greet = function () {
//   console.log("Hello");
// };

// person.greet();
// console.log(person);

// const umer = "age";

// const student = {
//   rollNo: 12,
//   faculty: "BIM",
//   [umer]: 22,
// };

// console.log(student.age);

// const uskoRollNo = "rollNo";

// console.log(student[uskoRollNo]);

// delete student.faculty;

// console.log(student);

// This is when you should use bracket notation
// const person = {
//   "first name": "Alice",
//   "last name": "Doe",
// };

// console.log(person["first name"]);

// Changing the value of a key
// const person = { name: "bigyan", age: 22 };
// person["age"] = 39;
// person.age = 30;
// console.log(person);

// const animal = {
//   name: "dog",
//   doesBark: true,
//   sound: function () {
//     console.log(`${this.name} barks`);
//   },
// };

// Object.freeze(animal); // can't add and modify
// animal.name = "tiger"; // This will not change the name due to freeze

// Object.seal(animal); // can modify but can't add
// animal.name = "tiger"; // this will change the name
// animal.age = 22; // this will not add age to the object
// console.log(animal);

// console.log(Object.isSealed(animal));

// const person = {
//   name: "Bigyan",
//   greet() {
//     console.log("namaskar");
//   },
// };

// person.sayHello = function () {
//   console.log("Hello");
// };

// person.sayHello();

// 2. 'bind' , 'call' and 'apply'

// bind --------------------------------
// const person = {
//   name: "Bigyan",
//   greet() {
//     console.log(`hi, I'm ${this.name}`);
//   },
// };

// const sayHi = person.greet;
// sayHi(); // hi, I'm (loses "this")

// const bindedSayHi = person.greet.bind(person);
// bindedSayHi();

// function add(a, b) {
//   console.log(a + b);
// }

// const numberJoda = add;
// numberJoda(1, 2);

// call ---------------------------------
// function introduce(greeting) {
//   console.log(`${greeting}, my name is ${this.name}`);
// }

// const person = { name: "Bob" };

// introduce.call(person, "Hello");

// apply -----------------------------------
// function introduce(greeting, greeting2) {
//   console.log(`${greeting} ${greeting2}, my name is ${this.name}`);
// }

// const person = { name: "Bob" };

// use it to pass multiple arguments, it is just like call
// introduce.apply(person, ["Hello", "namaste"]);

// const person = {
//   name: "Alic",
//   greet() {
//     console.log(`Hi , I'm ${this.name}`);
//   },
// };

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   person.greet();
// });

const person = {
  name: "Asim",
  age: 59,
};

// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// if (Object.keys(person).length > 0) {
//   console.log("object is not empty");
// }
