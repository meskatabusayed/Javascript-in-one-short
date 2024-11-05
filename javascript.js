/* ***Important Tolic : sometimes revision it :.....
=> 1. What is Javascrip?
=> 2. definition of variabel
=> 3. parseInt()
=> 4. parseFloat()
=> 5. type finding : var p = 20 ; 
console.log(typeof p);
=> 6. javascript is a dynamic typing.
=> 7. Data type -> (primitive ) - number , string , Boolean , undefined , null -> (non-primitive) - object , array , function
=> 8. toFixed() 
=> 9. "indexof" in array
=> 10. push , pop method in array
=> 11. multiple conditions - && , || , !
=> 12. if-else if - else
=> 13. while loop
=> 14. for loop
=> 15. display every element of an array
=> 16. break , continue statement
=> 17. reverse way to use for and while loop
=> 18. slice method : slice(start index , end index) - work as a index
=> 19. includes() method - value ause kina cheeck koree -- return true of false
=> 20. string is immutable.
=> 21. subString(start index , end index) method - string ar jonno kaj kore..
=> 22. block of code is called function
=> 23. function declaration , function invocation/call , return from a function
=> 24. Objects - key : value
=> 25. Object.keys() , Object.values() - give array
=> 26. get and set property values in object
=> 27. Objects.entries() method - provide all property names and values
=> 28. toLowerCase() and toUpperCase()
=> 29. startwith() and endswith()
=> 30. split() method - 
=> 31. join() method
=> 32. Math.pow() , Math.abs(), Math.round() , Math.ceil() , Math.floor() , Math.random() , swap variable 
=> 33. isArray() method - check array or not
=> 34. concat() - join 2 array or string
=> 35. splice(start remove index , end remove index , step) method - use remove element; also change this array
=> 36.  
*/

//### : Milestone - 4 : Hello Javascript
//## Module 16 .1 : Introduction to javascript
//Q1 : What is Javascript ?
/*===> source code =>(interpreter) => Mechine code (interpreter) => result */
/* Answer : Javascript is high level , interpreted programming language used to make web pages more interactive.It help's implement complex and beautiful things/design on web pages.*/
//script means - olpo code a onek kaj...
//Q2 : History of javascript?
/* Answer : Javascript was invanted by Brendan Eich.Netscape 2 was released with javascript 1.0.
//Origins of javascript : 
-> Originally developed by Netscape , as Livescript .
-> Become a joint venture of Netscape and sun in 1995, renamed javascript.
-> Now standardized by the European computer Manufectures Assoiciation as ECMA-262
-> An HTML - embaddeed scripting language
-> we'II call collections of javascript code scripts, not programs.
*/

/* Q3 : How does javascript run on the browser? */

/* Q4: Javascript Applications : 
1. website
2. web Application
3. Presentation
4. server Application
5. web servers
6. Games
7. Art
8. smartwatch Apps
9. Mobile Apps
10. Flying Robots
*/
/* Q5 :  */

//# 16.2 : Math Needed to start learning programming language:
/* 
1. Number -> 55, 66, -4, 9.6
2. Integer Number -> 5, 6, 7
3. Float number -< 32.4 , 56.4
4. Operation -> addition , subtraction , multiplication , division, remainder
5. Percent 
6. Average
7. comparision -> < , > , >= , <= , == , !=
8. okik rules Math
9. 32 , 43 , 56 => max , min , avarage , sum
10. series
* Extra:
----------
1. Prime number
2. Permutation
"""Always jodi lage shikhee nebo..."""

*/

//#16.3 : what is variable , Five things you need to declare A Variable
 
//->Variable : A variable is a value that can change depending on conditions of on information passed to the programming.

// var a = 20;
// let b = 3;
// const name = "Meskat";

//* Declare variable
//Variable Name : Variables must be identified with unique names.
//Assignment Operator : "=" use an assignment operator to assign a values
//value : Specifies the value to assign to the variable
// var price = 349;
//-> use a semicolone to indicate the end of var statement.
//* tips : A variable declared without a value will have the value undefined.
// var age = 23;
// var temparature = 38;

//#16.4 : variable type , Numeric , string , boolean : -

//  var person = "ali";
//  var location = "kushtia";

 /* string data types : Zero or more characters written inside quotes. 
 \ string = dori
 */

/* Numeric data types : Numbers can be written with or without decimals and without quotes. */
/* Boolean Data types :- It can inly take the values true or false and written without quotes. 0 -> false , 1 -> true */
/* How to declare a variable
         keyword variableName = value
*/
/* Data types : The five most basic types of data are string , numbers , boolean , undefined and null */

//#16.5 : Javascript , keyword , variable Name , Naming convention :
//* Naming convention :
 //user_home_address ->//snake case
 //userHomeAddress -> //camel case
 //UserHomeAddress ->//pascal case
 //* keywords are case sensitive

 //#16.6 : simple Mathematical operations in javascript
 //* vscode ar terminal a javascript ar code run korte chailee command -> node fileName --> ex. node mm.js
//  var onionPrice = 20;
//  var eggprice = 10;
//  var totalPrice = onionPrice + eggprice;
//  console.log(totalPrice);





/* Important Topic of Milestone 6 */


//let : allow it to reassign
//const : do not allow it to reassign
//* const normally use korle error dibe but array declare kore array ar moddhe change korle / push korle error dibe na....
//const arr = [23, 45, 67, 89];
//arr[2] = 11;
//arr.push(44);
// console.log(arr);
//* same as Object - vitore vitore change kore...
// const obj = {
//     name : "Meskat",
//     age : 21,
//     university : "BWU"
// }
// obj.name = "Abu Sayed"
// obj.age = 19
// console.log(obj);
//loop :- 
//for(let i = 0; i<10 ; i++){
    // console.log(i)
//}
//** akhanee jodi ami let ar jaigai const likhi tahole error dibe....
//* Template literals
//* Arrow functons
//* spread operator


/* ### Milestone 6 : Intermediate Javascript , Api :-  */




/* ## Module 30 : Js Recape and Basic ES6 , ES5 : - */
/* 30-1 : ES6 Intro difference between let , var , const : -  */
//var : no reason to use var
//let : allow it to reassign
//const : do not allow it to reassign

//* const normaly use korle error dibe but array declare koree array ar modhe change korle / push korle error dibe na.
// const numbers = [23, 3, 4 , 12];
// numbers[1] = 65;
// numbers.push(8, 9, 0);
// console.log(numbers);
//* same as object -> vitore vitore change
// const student = {
//     name : "Rahim",
//     class : 12
// }
// student.name = "mm";
// console.log(student);

//loop
// for(let i = 0; i<10 ; i++){
//     console.log(i);
//     //akhena "let" ar jaigai jodi "const" dauwa hoi tahole error dibe.karon value change korte parbe na...

// }


/* 30-2 : Function default paramater for not provided values:  */
/*---> */  
//1.number function
// function add(num1 = 0 , num2 = 0){
//     return num1 + num2}
//2.string function
// function fullName(f_name = " " , l_name = " "){
//         return f_name + " " + l_name
//     }
//3.array function
// function array(fiveCountryName = ["bd"]){
//         return fiveCountryName;
// }
//     const countryArray = array();
    // console.log(countryArray);
//4.object function : 
// function obj(person = {}){
//     return obj;
// }

/* 30-3 : Template string , multiple line string , dynamic string */
//Template Literals : - Template Literals are enclosed by (``)  backtick characters instead of double or single quotes , allowing for the following : 1. milti-line string , 2. string interpolation - (which are strings delimited by backticks (``) instead of single or double quotes.)

// const yourName = "Meskat";
// const age = 21;
// console.log(`Hey your name is ${yourName} and Your age is ${age}`);

/* 30-4 : Arrow function , multiple parameter, function body : - */

//function declaration
// function add(num1 , num2){
//     return num1+num2;

// }
//function expression : In JavaScript, a function expression is a way to define a function as a value or as part of another expression. It's different from a function declaration, which creates a named function in the current scope.Key Points: 1. Anonymous: Function expressions can be anonymous, meaning they don't have a name. 2. Assignment: They are often assigned to a variable, allowing you to use the variable to call the function. 3. Hoisting: Unlike function declarations, function expressions are not hoisted, meaning they cannot be used before they are defined in the code.

// const fullName = function yourName(f_name , l_name){
//     return f_name + " " + l_name;
// }

//arrow function : arrow function is one of the feature introduced es6 version of javascript. It allows to create functions in a cleaner way compared to regular functions.
// const newFunction = (a , b , c) => {
//     return a+b+c;

// }

/* 30-5 : More Arrow functions and big arrow function:- */
//1
//const difference = (x , y) => x-y;
//2
//const multiply = (first , second , third) => first*second*third;
//single parameter
//3
// const getAge = (person) => person.age;
// const student = {name : "a" , age : 21};
// const age = getAge(student);
// console.log(age)
//4
// const getThird = numbers => numbers[2];
// const third = getThird([5, 4, 23, 222]);
// console.log(third);
//no parameter
//5
// const getPI = () => Math.PI;
// console.log(getPI());

//large arrow function
// const doMath = (x,y,z) => {
//     const sum = x+y+z;
//     const mult = x*y*z;
//     const result = sum + mult;
//     return result;
// }

//Q : difference between arrow function and regular function?
//Ans : Arrow functions and regular functions in JavaScript have several key differences:
//1. 
//syntax : 
//Arrow Functions: They have a more concise syntax and do not require the function keyword.
// const add = (a, b) => a + b;
//Regular Functions: They use the function keyword and can have a more traditional syntax.
// function add(a, b) {
//     return a + b;
// }

/*30-6 :  Spread operator , array max , copy arrays */
//* non-primitive data type -> array , object ara referance dhore rakhe..
//spread operator : The javascript spread operator(...) allows us to quickly copy all or part of the array or object into another array or object.
//const normalArray = ["aa" , "mm" , "ss"];
// console.log(normalArray);
// const spread = ["ee" , ...normalArray];
// console.log(...normalArray);

//* Math.max() : The Math.max() method returns the number will the hightest value.

//let numberArr = [1, 2, 3, 45 , 67]
// console.log(Math.max(...numberArr));

//* How to copy an array?

//let numbers = [3, 4, 5];
//let allNumbers = [1, 2, ...numbers , 6, 7, 8];
// console.log(allNumbers);

//1. 
//const max = Math.max(23 , 32 , 44, 1);
// console.log(max);

//*use spread operator to copy:

//-> 
//const friends = ["Rahim" , "karim" , "Abdul"];
//const bondhu = friends;
///const dosto = [...friends] //copy
// console.log(dosto);
// friends.push(100);
// console.log(dosto);
// console.log(friends);


//*advanced
//const sonkha = [...friends , 99] //add extra elements while copy;

/* 30-7 : (advanced) Object and array destructur  */

//* Object Destructuring:-
// const SiteUser = {
//     UserName : "Meskat",
//     UserAge : 21,
//     email : "m@gmail.com"
// }

// const {UserName , UserAge : age(atake alise bolee) } = SiteUser;
// console.log(UserName , UserAge);

//* Array Destructuring

// const bookArray = [23, 45, 57, 34, 23, 56];
//*skiping items in an array
// const [num1 , ,  num3 ] = bookArray;
// console.log(num1 , num3);

//*Assign variables with a default value;
// let n1 , n2, n3;
// [n1 = 99 , n2= 98, n3 = 87] = [100 , 333]
// console.log(n1 , n2 , n3);

//*swiping values
//let num1 = 23;
//let num2 = 22;
//[num2, num1] = [num1 , num2]; //swap
// console.log(num1 , num2);

//*descructuring with function
// function arrFunc () {
//     return [1, 2, 3, 4]
// }
// const [arr1 , arr2 , arr3] = arrFunc();
// console.log(arr1 , arr2 , arr3);

//* advanced function descructuring with array

// function desFunc(a, b){
//     return [a*2 , b*2];
// }

// const [v1 , v2] = desFunc(2, 3);
// console.log(v1 , v2);

//*Advanced function destructuring with object

// const objFunc = (email , password) => {
//     return {email , password};
// }

// const {email , password} = objFunc("meskat" , "ms@gmail.com");
// console.log(email , password);

/* 30-8 : Keys , values , entries , delete , seal , freeze */

const laptop = {
    name : "Laptop",
    price : 21000,
    company : "HP"
}
//object.keys()
const keys = Object.keys(laptop);
//Object.values()
const values = Object.values(laptop);
//Object.entries()
const entire = Object.entries(laptop);
// console.log(entire);
//delete
// delete laptop.name;
//object spread with delete
const {name , ...shortLaptop} = laptop;
// console.log("3" , shortLaptop);

laptop.processor = "intel";
// console.log(laptop);
//freeze()
// Object.freeze(laptop);
laptop.processModel = "i5";
// console.log("37" , laptop);
//seal()
Object.seal(laptop);
// console.log("37" , laptop);


/*1. Object.keys() -> returns all the keys of Object as array
2. Objects.values() -> returns an array of values
3. Objects.entries() -> returns an array of [key , value] pairs
4. ways to delete/remove object property :
   ->1. delete Object.property
   ->2. Remove a property using rest syntex :
     ---- const {property , ...rest} = Object
5. Object.freeze()
 -> Prevents changing the existed properties of an object.
 -> Doesn't allow removing the existing properties
 -> Prevents adding new properties
 -> Properties of child objects can be modified.
6.Objects.seal()
 -> Allows changing existing properties of an object
 -> Prevents adding new properties
 -> Don't allow removing the existing properties
 
 7. Object.freeze() vs Object.seal();

*/


/* 30-9 : For of , for in , Module summary and practise problem : */

//*for of

//for of : use on array or string not in object.

// const numbers = [23, 21, 45, 67];
// for(const num of numbers){
//     // console.log(num);
// }

// const countryName = "Bangladesh";
// for(const country of countryName){
//     // console.log(country);
// }

//for in : 
//for in : use on object:

// const glass = {
//     name : "glass",
//     color : "golden",
//     price : 21000
// }

// for(const key in glass){
//     const value = glass[key]; //akhanee dot(.) diye access kora jai na...
//     console.log(key , ":"  , value);
// }













