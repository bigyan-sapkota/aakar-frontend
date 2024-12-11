// VARIABLE DECLARATION : var, let, const

// function asim() {
//   console.log("Hello World");
// }

// asim();

// USAGE OF VAR ---------------------------
// hoisted

function varUsage() {
  console.log(a); // output : undefined
  // var a; Initialization or declaration
  var a = 10;
  console.log(a); // output : 10
}

// if the variable is initialized or used withing function it gives referenceError
// console.log(a);

a = 12;
if (a > 10) {
  var myVal = 30;
}

// console.log(myVal);

// varUsage();
