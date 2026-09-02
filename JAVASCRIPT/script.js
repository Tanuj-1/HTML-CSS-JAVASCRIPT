/**
 - TOKENS : smallest unit of every programming language
 - There are 4 types of tokens

 1) keywords : reserved words which has specific meaning. ex- if,else,var,let,const etc

 2) identifiers : name given to a variables, methods, functions, class 

 3) literals : data stored in a variable

 4) operators : symbol used to perform specific operations between operands

 IN JAVA :-  int a = 10
 IN JS :- var a = 10 || let b = 20 || const c = 30

 DATATYPES :  Type of data which is stored in a variable
 - There are 2 types of datatypes

 1) PRIMITIVE (immutable || call by value) : There are 7 types
    - number
    - string
    - boolean
    - undefined
    - null
    - bigint
    - symbol

 2) NON-PRIMITIVE (mutable || call by reference) : There are 3 types
    - array
    - object
    - function
 */

//! MUTABLE VS IMMUTABLE
// var arr = [10, 20, 30];
// arr[0] = 50;
// console.log(arr); // [50, 20, 30]; <-- mutable

// var str = "Hello";
// str[0] = "X";
// console.log(str); // Hello <-- immutable

//! HOW TO CHECK DATATYPE OF ANY VALUE : typeof variableName
// var a1 = 10.109;
// console.log(typeof a1); // number

// var a2;
// console.log(a2); // undefined
//! undefined :  variable is declared without initialization.
//! not defined : its an error which occur when we try to access a variable which in not declared.

//! null : null means empty, intentionally provided by the developer to keep varaible empty
// var a3 = null;
// console.log(a3, typeof a3); // null object

//! Any no which is greater that this range (-2^53 - 1 to 2^53 - 1) cannot be displayed accurately in console, then convert it into bigint

// var a4 = 999999999999999999999999999999999n;
// console.log(a4, typeof a4);

// var a5 = Symbol("Hello");
// var a6 = Symbol("Hello");
// console.log(a5);
// console.log(a6);
// console.log(a5 == a6);

// console.log(10 == "10"); // true <-- loosely comparison
// console.log(10 === "10"); // false <-- strictly comparison

//! HOISTING : moving declaration part at the top of the code internally

// // var a = ud <--- hoisted and intialized with ud
// console.log(a); // ud
// var a = 10;
// console.log(a); // 10

// // let b <---- Hoisted but cannot initailized due to Temporal Dead Zone (TDZ)
// console.log(b); // error
// let b = 20;
// console.log(b); // 20

//! VAR EXAMPLE
// var a; //<---------------- declare
// console.log(a); // ud
// a = 10; //<--------------- initialize
// console.log(a); // 10
// var a; //<---------------- re-declare
// console.log(a); // 10
// a = 20; //<--------------- re-initialize
// console.log(a); // 20

// var b = 10; //<----------- declare & initialize
// console.log(b); // 10
// var b = 30; //<----------- re-declare & re-initialize
// console.log(b); // 30

//! LET EXAMPLE
// let b;
// console.log(b); // ud
// b = 100;
// console.log(b); // 100
// // let b; //! SyntaxError: Identifier 'b' has already been declared
// console.log(b); // 100
// b = 200;
// console.log(b); // 200

// let c = 300;
// console.log(c);
// // let c = 400; //! SyntaxError: Identifier 'c' has already been declared
// console.log(c);

//! SCOPES EXAMPLE

//! GLOBAL VARIABLES AND SCOPE EXAMPLES
// var a = 10; // GLOBAL VARIABLE - GLOBAL SCOPE
// let b = 20; // GLOBAL VARIABLE - SCRIPT SCOPE <- (TDZ)
// const c = 30; // GLOBAL VARIABLE -  SCRIPT SCOPE <- (TDZ)

// //! LOCAL VARIABLES AND SCOPES EXAMPLES
// // in conditional OR loops (both same)
// if (10 < 20) {
//   var x = 100; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let y = 200; // LOCAL VARIABLE - BLOCK SCOPE
//   const z = 300; // LOCAL VARIABLE - BLOCK SCOPE
// }

// in functions
// function demo() {
//   var m = 1000; // LOCAL VARIABLE - LOCAL SCOPE
//   let n = 2000; // LOCAL VARIABLE - LOCAL SCOPE
//   const o = 3000; // LOCAL VARIABLE - LOCAL SCOPE
// }
// demo();

//! FUNCTIONS :  BLOCK OF CODE USED TO PERFORM SPECIFIC TASK
// DRY PRINCIPLE  -> DONOT REPEAT YOURSELF

//! 1) NAMED FUNCTION :  Function which has name
//! NOTE: Only named function can be called before declaration (Hoisting)

// webDevelopment(); // due to hoisting

// function webDevelopment() {
//   console.log("HTML");
//   console.log("CSS");
//   console.log("JS");
// }
// webDevelopment();

//! 2) ANONYMOUS FUNCTION : Function without name
// function (){
//    console.log("I am Anonymous");
// }

//! 3) FUNCTION EXPRESSION : Used to call Anonymous function
// const f1 = function () {
//   console.log("I am Anonymous called using Function Expression");
// };
// f1();

//! 4) FUNCTION WITH ARGUEMENTS AND PARAMETERS
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20); // here, 10 and 20 are arguements

//! 5) RETURN TYPE FUNCTION
// function multiply(n1 = 1, n2 = 1) {
//   let val = n1 * n2;
//   return val; // 25
// }
// //! way 1
// let x = multiply(5, 5);
// console.log(x); //  25

//! way 2
// console.log(multiply(5, 5));

//! 6) HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
//! HOF : a function which returns another function OR accepts a function as arguement OR both.

//! CB : a function which passes as an arguement to another function
// function HOF(cb) {
//   return function B() {};
// }
// HOF(function A() {});

//! 7) NESTED FUNCTION :

// closure is a temporary memory which is created when child function having an access of parent function's properties and it gets distroyed after the execution of child function.

// function Parent() {
//   let money = 1000;
//   console.log("I am Parent", money);

//   function Child() {
//     console.log("I am Child", money); // due to closure (Parent)
//   }

//   Child();
// }

// Parent();

//! 8) Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("I am IIFE");
// })();

//! 9) ARROW FUNCTION
// const a1 = () => {
//   console.log("Arrow func");
// };
// a1();

// const a2 = () => console.log("Hii");
// a2();

// // EXPLICIT
// const a3 = () => {
//   return "Explicit";
// };
// console.log(a3());

// // IMPLICIT
// const a4 = (n1, n2) => n1 + n2;
// console.log(a4(10, 20));

//! ARRAYS : collection of similar or different types of data
// const arr1 = [10, 20, 30, 40];

// array.length ---> no. of elements in an array
// console.log(arr1.length); // 4

//! ARRAY METHODS

// // push() : adds new element at the end of an array
// arr1.push(50);
// console.log(arr1);

// // pop() : removes last element
// arr1.pop();
// console.log(arr1);

// // unshift() : adds new element at the start of an array
// arr1.unshift(100);
// console.log(arr1);

// // shift() : removes first element
// arr1.shift();
// console.log(arr1);

//! splice(pos , deleteCount , newElement)
// const arr2 = [10, 20, 30, 40];
// console.log(arr2);

// arr2.splice(1, 1);
// console.log(arr2);

// arr2.splice(3, 0, 35);
// console.log(arr2);

// arr2.splice(1, 2, 25);
// console.log(arr2);

//! slice(startIndex, endIndex)
// const arr3 = [100, 200, 300, 400];
// console.log(arr3);

// console.log(arr3.slice(1, 3));
// console.log(arr3.slice(-3, -1));
// console.log(arr3.slice(-3, 3));

//! forEach()
// const arr4 = [10, 20, 30, 40];

// let val1 = arr4.forEach((ele, idx, array) => {
//   // console.log(ele, idx, array);
//   return ele * 5;
// });
// console.log(val1);

// //! map()
// let val2 = arr4.map((ele, idx, array) => {
//   // console.log(ele, idx, array);
//   return ele * 5;
// });
// console.log(val2);

// //! filter()
// let val3 = arr4.filter((ele, idx, array) => {
//   return ele > 20;
// });
// console.log(val3);

// //! find()
// let val4 = arr4.find((ele, idx, array) => {
//   return ele > 20;
// });
// console.log(val4);

// //! findIndex()
// let val5 = arr4.findIndex((ele, idx, array) => {
//   return ele > 20;
// });
// console.log(val5);

// //! reduce()
// let val6 = arr4.reduce((acc, ele, idx, array) => {
//   console.log(acc, ele);
//   return acc + ele;
// }, 0);
// console.log(val6);

//! OBJECTS
// // CREATE
// const obj1 = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 20,
//   isAdmin: false,
//   greet: function () {
//     console.log("Welcome");
//   },
// };
// console.log(obj1);

// // READ
// console.log(obj1.firstname);
// obj1.greet();

// // UPDATE
// obj1.age = 28;
// obj1.isAdmin = true;
// console.log(obj1);

// // ADD NEW PROPERTY
// obj1.company = "QSP";
// obj1.dummy = "dummy key";
// console.log(obj1);

// // DELETE
// delete obj1.dummy;
// console.log(obj1);

//! OBJECT DESTRUCTURING
// const simpleObject = {
//   name: "John",
//   age: 20,
//   company: "HCL",
// };

// let { name, company, age } = simpleObject;

// console.log(name);
// console.log(age);

// const complexObject = {
//   name: "Jane",
//   age: 25,
//   address: {
//     street: 4,
//     city: "Noida",
//     state: "UP",
//   },
// };

// let {
//   name: firstname,
//   address: { city },
// } = complexObject;
// console.log(firstname, city);

// //! ARRAY DESTRUCTRING
// const simpleArray = [100, 200, 300, 400, 500];
// let [a1, a2, a3, a4, a5] = simpleArray;
// console.log(a1, a3, a5);

// // skipping values
// let [, b2, , , b5] = simpleArray;
// console.log(b2, b5);

// const complexArray = [10, 20, [1000, 2000, 3000]];
// let [c1, c2, [c3, c4, c5]] = complexArray;
// console.log(c1, c3, c5);

//! STRING
// let str1 = 'John'
// let str2 = "Doe"
// let str3 = `Welcome
// Hii How are you? ${str1} ${str2}
// `
// // multi-line string
// // ${} <---- string interpolation

// console.log(str1);
// console.log(str2);
// console.log(str3);

//! TIMER FUNCTION --> setInterval and setTimeout

// // setInterval(callbackFunction , intervalTime)
// const intervalID = setInterval(() => {
//   console.log("Hiii");
// }, 1000);

// // setTimeout(callbackFunction , timeout)
// setTimeout(() => {
//   console.log("Timeout");
//     clearInterval(intervalID);
// }, 8000);

//! HOW JS EXECUTES SYNCHRONOUS AND ASYNCHRONOUS CODE ? --> using Event Loop

// console.log("Start");

// setTimeout(function T1() {
//   console.log("Timer 1");
// }, 5000);

// console.log("Hii");

// Promise.resolve().then(function P1() {
//   console.log("Promise 1");
// });

// setTimeout(function T2() {
//   console.log("Timer 2");
// }, 100);

// console.log("Hello WOrld");

// setTimeout(function T3() {
//   console.log("Timer 3");
// }, 0);

// console.log("End");

//! DOM : Document Object Model is a visual representaion of HTML Document in a tree-like structure and each HTML element is represented as DOM Node. In DOM every Node is treated as an Object.

// There are 5 Types of DOM Selectors :

// //! - document.getElementById()
// const box1 = document.getElementById("box1");
// console.log(box1);
// console.log(box1.textContent);
// console.log(box1.id);
// box1.style.backgroundColor = "red";

// //! - document.getElementsByClassName()
// const containers = document.getElementsByClassName("container");
// console.log(containers); // HTMLCollection[]

// //! - document.getElementsByTagName()
// const articles = document.getElementsByTagName("article");
// console.log(articles); // HTMLCollection(3) [article, article, article]

// //! - document.querySelector("")
// const ele1 = document.querySelector("#box1");
// console.log(ele1);

// const ele2 = document.querySelector(".container");
// console.log(ele2);

// const ele3 = document.querySelector("article");
// console.log(ele3);

// //! - document.querySelectorAll()

// const elements1 = document.querySelectorAll("#box1");
// console.log(elements1); // NodeList [div#box1]

// const elements2 = document.querySelectorAll(".container");
// console.log(elements2); // NodeList(3) [section.container, section.container, section.container]

// const elements3 = document.querySelectorAll("article");
// console.log(elements3); // NodeList(3) [article, article, article]

//! DOM EVENTS :  The action performed by the user. Example:- click,dblclick, submit, mouseenter, mouseout, scroll.....etc

// There are 2 ways to apply events on HTML element

// - using event attribute
function handleClick() {
  console.log("btn clicked");
}

// - using addEventListener() method <----- RECOMMENDED
const loginBtn = document.querySelector("#login-btn");
console.log(loginBtn); // <-- always check after targetting

loginBtn.addEventListener("click", () => {
  alert("Login Success ✅");
});

//! DOM MANIPULATION

//! EXAMPLE 1
const h1Tag = document.createElement("h1");
h1Tag.textContent = "Hello WOrld";
h1Tag.id = "heading";
h1Tag.className = "text";
console.log(h1Tag);
document.body.appendChild(h1Tag);

//! EXAMPLE 2 : Create below HTML structure using DOM
/*
<div class = "card">
  <img src="" alt="">
  <h2>John Doe</h2>
  <p>Web developer</p>
  <button>Hire ME</button>
</div>
*/

const mainTag = document.querySelector("#card-container");
const divTag = document.createElement("div");
const imgTag = document.createElement("img");
const h2Tag = document.createElement("h2");
const pTag = document.createElement("p");
const buttonTag = document.createElement("button");

divTag.className = "card";
imgTag.src = "";
imgTag.alt = "John doe";

h2Tag.textContent = "John Doe";
pTag.textContent = "Web developer";
buttonTag.textContent = "Hire ME";

divTag.append(imgTag, h2Tag, pTag, buttonTag);

console.log(divTag);
mainTag.append(divTag);