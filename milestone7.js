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
const arr = ["Satarday" , "Sunday" , "Monday" , "Friday"];
for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
}
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
const numArr = [34 , 67, 89];
for(let i = 0; i < numArr.length; i++){
    if(numArr[i] === 67){
        continue
    }
    console.log(numArr[i]);
}

//Q4: How can you break out of a loop when a specific condition is met?
const numArr2 = [34 , 67, 89];
for(let i = 0; i < numArr2.length; i++){
    if(numArr2[i] === 67){
        break
    }
    console.log(numArr2[i]);
}

//Q5: How can you use a while loop to repeat a task until a condition becomes false?




//***5. Function :
//***6. Object : (3 ways to access property By name).

//# 37-2 : Template String , Arrow Function , 