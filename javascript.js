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

var a = 20;
let b = 3;
const name = "Meskat";

//* Declare variable
//Variable Name : Variables must be identified with unique names.
//Assignment Operator : "=" use an assignment operator to assign a values
//value : Specifies the value to assign to the variable
var price = 349;
//-> use a semicolone to indicate the end of var statement.
//* tips : A variable declared without a value will have the value undefined.
var age = 23;
var temparature = 38;

//#16.4 : variable type , Numeric , string , boolean : -

 var person = "ali";
 var location = "kushtia";

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
 var onionPrice = 20;
 var eggprice = 10;
 var totalPrice = onionPrice + eggprice;
//  console.log(totalPrice);


/* Important Topic of Milestone 6 */
//let : allow it to reassign
//const : do not allow it to reassign
//* const normally use korle error dibe but array declare kore array ar moddhe change korle / push korle error dibe na....
const arr = [23, 45, 67, 89];
arr[2] = 11;
arr.push(44);
// console.log(arr);
//* same as Object - vitore vitore change kore...
const obj = {
    name : "Meskat",
    age : 21,
    university : "BWU"
}
obj.name = "Abu Sayed"
obj.age = 19
// console.log(obj);
//loop :- 
for(let i = 0; i<10 ; i++){
    // console.log(i)
}
//** akhanee jodi ami let ar jaigai const likhi tahole error dibe....
//* Template literals
//* Arrow functons
/* ### Milestone 6 : Intermediate Javascript , Api :-  */
/* ## Module 30 : Js Recape and Basic ES6 , ES5 : - */
/* 30-1 : ES6 Intro difference between let , var , const : -  */
/* 30-2 : Function default paramater for not provided values:  */
/*---> */  
//1.number function
function add(num1 = 0 , num2 = 0){
    return num1 + num2}
//2.string function
function fullName(f_name = " " , l_name = " "){
        return f_name + " " + l_name
    }
//3.array function
function array(fiveCountryName = ["bd"]){
        return fiveCountryName;
}
    const countryArray = array();
    // console.log(countryArray);
//4.object function : 
function obj(person = {}){
    return obj;
}

/* 30-3 : Template string , multiple line string , dynamic string */
//Template Literals : - Template Literals are enclosed by (``)  backtick characters instead of double or single quotes , allowing for the following : 1. milti-line string , 2. string interpolation - (which are strings delimited by backticks (``) instead of single or double quotes.)

const yourName = "Meskat";
const age = 21;
// console.log(`Hey your name is ${yourName} and Your age is ${age}`);

/* 30-4 : Arrow function , multiple parameter, function body : - */

//function declaration
function add(num1 , num2){
    return num1+num2;

}
//function expression : In JavaScript, a function expression is a way to define a function as a value or as part of another expression. It's different from a function declaration, which creates a named function in the current scope.Key Points: 1. Anonymous: Function expressions can be anonymous, meaning they don't have a name. 2. Assignment: They are often assigned to a variable, allowing you to use the variable to call the function. 3. Hoisting: Unlike function declarations, function expressions are not hoisted, meaning they cannot be used before they are defined in the code.

const fullName = function yourName(f_name , l_name){
    return f_name + " " + l_name;
}

//arrow function : arrow function is one of the feature introduced es6 version of javascript. It allows to create functions in a cleaner way compared to regular functions.
const newFunction = (a , b , c) => {
    return a+b+c;

}

/* 30-5 : More Arrow functions and big arrow function:- */
//1
const difference = (x , y) => x-y;
//2
const multiply = (first , second , third) => first*second*third;
//single parameter
//3
const getAge = (person) => person.age;
const student = {name : "a" , age : 21};
const age = getAge(student);
// console.log(age)
//4
const getThird = numbers => numbers[2];
const third = getThird([5, 4, 23, 222]);
// console.log(third);
//no parameter
//5
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function
const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}

//Q : difference between arrow function and regular function?
//Ans : Arrow functions and regular functions in JavaScript have several key differences:
//1. 
//syntax : 
//Arrow Functions: They have a more concise syntax and do not require the function keyword.
const add = (a, b) => a + b;
//Regular Functions: They use the function keyword and can have a more traditional syntax.
function add(a, b) {
    return a + b;
}













