//### MileStone : 7 : Introduction simple React
//## Module 37 : Javascript you need to know for React :-
//# 37-0 : Roadmap of this milestone:-
//# 37-1 : Six Javascript Fundamentls That you need to know
//***1. How to Declare a variable using let and const.
/* let a = 34;
const university_name = "Brainware University"; */

//***2. ^6 Basic condition : > , > , === , !== , <= , >= and multi condition : && , ||

/* const x = 23;
const y = 34;
console.log(">",x>y);
console.log("<",x<y);
if(x===y){
    console.log("Meskat");
}else if(x!==y){
    console.log("Abusayed");
}

console.log("<=",x<=y);
console.log(">=" , x>=y);

const salary = 20000;
const workingDays = 50;
if(salary >= 20000 && workingDays <= 5){
    console.log("I am agree");
}else if(salary >= 20000 || workingDays <=5){
    console.log("I am thinking");
}else {
    console.log("No , i will not");
} */

//***3. array :
//*=Array Index : An index is the position number of an item in an array.
/* ✅ indexOf() – for finding the first index of a specific value.
const fruits = ["apple", "banana", "cherry"];
const index1 = fruits.indexOf("cherry");

console.log(index1);*/

/* ✅ findIndex() – for finding index based on a condition 
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const index2 = users.findIndex(user => user.id === 2);

console.log(index2); */

/* ✅ lastIndexOf() – for finding the last occurrence of a value 
const numbers = [1, 2, 3, 2, 1];
const lastIndex = numbers.lastIndexOf(2);

console.log(lastIndex); */

/* ❗Note : 
1. indexOf() and lastIndexOf() are for primitive values (like numbers or strings).

2. findIndex() is better for objects or more complex conditions. 
*/
//*= Array length :

   /*  const myArray = ["Meskat" , "Mohammad" , "AbuSaued"];
    console.log(myArray.length);
 */

//***4. Loop :
//Q1 : How can you use a for loop to print all elements of an array?
/* const arr = ["Satarday" , "Sunday" , "Monday" , "Friday"];
for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
} */
//Q2 : What is the difference between for, for...in, and for...of loops?
/* 
1. for loop :
a. Use case: Classic loop — good for indexing and controlling loop manually.

b. Works with: Arrays (and any iterable with length).

2. for...in loop
a. Use case: Loops over keys (indexes or property names).

b. Works with: Arrays and objects (use with caution on arrays).

3. for...of loop
a. Use case: Loops over values of iterable objects (arrays, strings, maps, sets).

b. Works with: Arrays, strings, sets, etc. (not plain objects).

*/

//Q3: How can you loop through an array and skip certain elements using continue?
/* const numArr = [34 , 67, 89];
for(let i = 0; i < numArr.length; i++){
    if(numArr[i] === 67){
        continue
    }
    console.log(numArr[i]);
} */

//Q4: How can you break out of a loop when a specific condition is met?
/* const numArr2 = [34 , 67, 89];
for(let i = 0; i < numArr2.length; i++){
    if(numArr2[i] === 67){
        break
    }
    console.log(numArr2[i]);
} */

//Q5: How can you use a while loop to repeat a task until a condition becomes false?




//***5. Function :
//Q1 : 1. What is the difference between a function declaration and a function expression in JavaScript?
/*  ***Function Declaration
A function declaration defines a named function using the function keyword.
function greet() {
  console.log("Hello!");
}
✅ Key Points:
Hoisted: Function declarations are hoisted to the top of their scope, so they can be called before they are defined in the code.

sayHi(); // ✅ Works, due to hoisting

function sayHi() {
  console.log("Hi there!");
} */

/*   ***Function Expression
A function expression involves assigning a function (anonymous or named) to a variable.
const greet = function () {
  console.log("Hello!");
};

✅ Key Points:
Not hoisted: Function expressions are not hoisted, so they cannot be used before they are defined.

Can be anonymous or named (though anonymous is more common).

sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization

const sayHi = function () {
  console.log("Hi there!");
}; */

// Q2 : What will the following code output and why?
// function sayHi() {
//   console.log("Hi");
// }

// var result = sayHi();
// console.log(result);.

/* 
🔍 What happens:
The function sayHi() is defined.

Then it's called with sayHi():

This executes the function body:
→ console.log("Hi");
→ So "Hi" is printed.

The return value of sayHi() is assigned to the variable result.

Since there is no return statement, the function returns undefined by default.

Then console.log(result); prints undefined.
✅ Final Output:
Hi
undefined

💡 Why?
Because:

"Hi" is printed inside the function when it's called.

undefined is printed because the function does not return any value, so the result variable holds undefined.

*/


//Q3 : Write a JavaScript function named isEven that takes a number as a parameter and returns true if the number is even, otherwise returns false.

/* function isEven(num){
    if(num % 2 === 0){
        return true;

    }
    else{
        return false;
    }

}

console.log(isEven(2)); */

//Q4 : 4. What is a callback function in JavaScript?(Give an example where a callback function is used.)

/* 
A callback function is a function passed as an argument to another function, which is then invoked (called) inside that function to complete some kind of routine or action.
🔹 Why use callbacks?
a. To ensure that a certain code executes only after another task is completed.
b. Commonly used in asynchronous operations like API calls, file reading, or timers

🔸 Example: Using a Callback in a Function
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Sayed", sayBye);
✅ Output:
Hi Sayed
Bye!

🔍 Explanation:
a. greet takes two arguments: a string name and a function callback.

b. It prints the greeting message, and then calls the callback().

c. We passed sayBye as the callback, which then gets executed inside greet.

🔸 Another Example: setTimeout (Built-in callback usage)
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
Here, the anonymous function is a callback that runs after 2000ms (2 seconds).

*/

// Q5 : What will this code print? Explain the behavior.
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter();
// counter();

/* 
🖨️ Output:
1
2

🔍 Explanation:
Let’s go step by step:

1. outer() is called:
a. Inside outer, a local variable count is initialized to 0.

b. outer returns the inner function — but not executed yet.

2. const counter = outer();
a. Now, counter holds the returned inner function.

b. Even though outer() finished executing, its local variable count is preserved.

🔁 This is because of a concept called a closure.

🔹 What is a Closure?
A closure is when a function “remembers” the variables from its lexical (outer) scope, even after that outer function has finished executing.

So inner() still has access to count, even though outer() has already returned.

3. First call: counter();
count goes from 0 → 1

Output: 1

4. Second call: counter();
count goes from 1 → 2

Output: 2

🧠 Key Takeaways:
a. JavaScript functions can return other functions.

b. Returned inner functions keep access to variables in their outer function — even after the outer function has returned.

c. This behavior is called a closure.

*/





//***6. Object : (3 ways to access property By name).
//Q1 : How do you create an object in JavaScript with the properties name, age, and isStudent?
/* const person = {
  name : "Meskat",
  age : 22,
  isStudent : true,
}

console.log(person.name);
console.log(person.age);
console.log(person.isStudent); */

//Q2 : Given the object below, how do you access the value "JavaScript"?
// const course = {
//   title: "JavaScript",
//   duration: "4 weeks"
// };

/* console.log("find javascript",course.title); */

// Q3 : How do you add a method greet to an object person that logs "Hello, I am [name]"?
// const person = {
//   name: "Alice"
// };

/* const person = {
    name : "Meskat Mohammad Abu Sayed",
    great : function(){
      console.log("Hello , I am" + this.name)
    }
}

person.great(); */

// Q4: Given the object:
// const scores = { math: 95, english: 88, science: 92 };
// How can you loop through all the keys and values?

/* //Answer way -1 : 
const scores = { math: 95, english: 88, science: 92 };

for (let subject in scores) {
  console.log(subject + ": " + scores[subject]);
}

//Answer way - 2:
const scores2 = { math: 95, english: 88, science: 92 };

for (let [subject, score] of Object.entries(scores2)) {
  console.log(`${subject}: ${score}`);
} */

//Q5 : What will be the output of the following code?
// const user = { username: "john_doe", email: "john@example.com" };
// const { username, email } = user;
// console.log(username, email);

/* //Output : 
john_doe
john@example.com */

//# 37-2 : Template String , Arrow Function , spread Operator
//*** 1.Template String

//Q1 : What will be the output of the following code?
// const name = "Sayed";
// console.log(`Hello, ${name}!`);

/* Output : Hello , Sayed */

//Q2 :  How do you use a template string to create a multi-line message like this?
// Name: Sayed
// Course: JavaScript
// Level: Beginner

/* const multi_line_messgae = `
Name: Sayed
Course: JavaScript
Level: Beginner
`;
console.log(multi_line_messgae); */

//Q3 : What will be the output of the following code?
// const a = 5;
// const b = 3;
// console.log(`The sum of a and b is ${a + b}`);


/* Output : The sum of a and b is 8 */

//Q4 :  Given a function greet(name), how can you use it inside a template string to print Hello, Alice!?
// function greet(name) {
//   return `Hello, ${name}!`;
// }

/* const result = greet("Alice");
console.log(result); */

//Q5 : Given the object below, how can you use a template string to print:
// Student John scored 90 in math.
// const student = {
//   name: "John",
//   scores: {
//     math: 90
//   }
// };

/* console.log(`Student ${student.name} scored ${student.scores.math} in math`); */

//*** 2.Arrow Function

//Q1 : Convert the following function into an arrow function:
// function greet(name) {
//   return "Hello, " + name;
// }

/* const greet = (name) => {
  return "Hello, " + name;
}

const result = greet("Meskat");
console.log(result); */

//Q2 : What will be the output of the following arrow function?
// const add = (a, b) => a + b;
// console.log(add(3, 4));

/* Output : 7 */

//Q3 : Write an arrow function called sayHi that returns "Hi there!" and takes no parameters.
/* 
const sayHi = () => "Hi there!";
console.log(sayHi());

*/


// Q4 : Use an arrow function with .map() to square each number in this array:
// const numbers = [1, 2, 3, 4];

/* 
const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num);

console.log(squared); // Output: [1, 4, 9, 16]
*/


// Q5 : What is the output and behavior of this in the following code?
// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(`Hello, I am ${this.name}`);
//   }
// };

// person.greet();

/* 
Hello, I am undefined

🔍 Explanation:
a. Arrow functions do not have their own this.

b. Instead, they inherit this from the surrounding (lexical) scope.

c. In this case, the surrounding scope is the global context, not the person object.

d. In most environments, this.name in the global scope is undefined.

✅ Correct way using a regular function:
If you want this to refer to the person object, use a regular function:
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

person.greet(); // Output: Hello, I am Alice

*/


//*** 2.Spread Operator
//Q1 : Create a new array from an older array and add an element.
/*  const number = [1 , 2, 3, 4];
 const newNumber = [...number];
 const currentNumber = [...number , 55, 56];
 console.log(number);
 console.log(newNumber);
 console.log(currentNumber); */

//Q2 : How can you create a shallow copy of the following array using the spread operator?
// const numbers = [1, 2, 3];

//Q3 : How can you merge the two arrays below into a single array using the spread operator?
// const arr1 = [1, 2];
// const arr2 = [3, 4];

//Q4: Given the function below, how can you use the spread operator to pass the values of an array as arguments?
// function sum(a, b, c) {
//   return a + b + c;
// }
// const values = [2, 4, 6];

//Q5: How can you use the spread operator to create a copy of the following object and change the age to 30 in the new object?
// const user = { name: "Alice", age: 25 };

//Q6: How can you combine the following two objects using the spread operator?
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };


//# 37-3 : Array Methods(Map , For Each , Filter, And Find)
//*** 1. Map
//Q1 : You are given the array:
// const numbers = [1, 2, 3, 4];
// Use the map() method to return a new array where each number is doubled.


//Q2: Given the following array of objects:
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];
// Use map() to create an array containing only the names.

//Q3: Given the array:
// const students = [
//   { name: "John", marks: 70 },
//   { name: "Jane", marks: 90 }
// ];
// Use map() to return a new array where each object includes a new field passed that is true if marks > 75, otherwise false.

//Q4: You are given this array:
// const items = ["apple", "banana", "cherry"];
// Use map() to return a new array of strings in the format:
// Item 1: apple, Item 2: banana, Item 3: cherry

//Q5: Given the array:
// const prices = [10, 20, 30];
// Use map() to convert each number to a string with a dollar sign in front: ["$10", "$20", "$30"]


//*** 2. For Each
//Q1: 
// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(function(fruit, index) {
//   console.log(index + ": " + fruit);
// });
// What will be the output of the above code?

//Q2:
// const numbers = [10, 20, 30];
// let sum = 0;
// numbers.forEach(function(num) {
//   sum += num;
// });
// console.log(sum);
// What will sum be after the forEach loop runs?

//Q3 : 
// const nums = [1, 2, 3, 4];
// const result = nums.forEach(num => {
//   return num * 2;
// });
// console.log(result);
// What will be printed and why?

//Q4 : 
// const arr = [1, 2, 3];
// arr.forEach((val, i, arr) => {
//   arr[i] = val * 2;
// });
// console.log(arr);
// What will arr contain after the loop?

//Q5 : 
// const names = ["John", "Jane", "Doe"];
// names.forEach(name => {
//   if (name === "Jane") return;
//   console.log(name);
// });
// What will be printed and why doesn't return skip the iteration?

//*** 3. Filter


