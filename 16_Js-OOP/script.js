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
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtils.add(1, 2));

// class Example {
//   static sayHello() {
//     return "Hello!";
//   }
// }

// const obje = new Example();
// console.log(Example.sayHello());
// obje.sayHello(); // this throws error

// 5. Inheritance -------------------------------
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  sound() {
    console.log(`${this.name}, the ${this.breed}, barks`);
  }
}

const husky = new Dog("Husky", "Snow ");
husky.sound();

// class Parent {
//   static greet() {
//     console.log("Hello from parent");
//   }
// }

// class Child extends Parent {}
// Child.greet();

// 6. public, protected and private -------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello , I'm ${this.name}`);
  }
}
const bigyan = new Person("bigyan", 22);
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
//     if (this.#password === "1234") {
//       console.log("Correct password");
//     } else {
//       console.log("Incorrect password");
//     }
//   }
// }

// const rupak = new Facebook("bigyan@gmail.com", "1234");
// console.log(rupak.authenticatePassword());

// protected
class Parent {
  constructor() {
    this._protectedField = "I'm protected";
  }

  showProtectedField() {
    console.log(this._protectedField);
  }
}

class Child extends Parent {
  accessProtectedField() {
    console.log(this._protectedField);
  }
}

const child = new Child();
child.showProtectedField();
child.accessProtectedField();
console.log(child._protectedField);
