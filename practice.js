//slice method:
var arr = [12 , 13 , 24, 66];
// console.log(arr.slice(1, 3));
var myName = "Korim vai";
// console.log(myName.includes("vai"));
function fullName(firstName , lastName){
    const fullName = firstName + " " + lastName;
    return fullName;
}

const name = fullName("Meskat" , "AbuSayed");
// console.log("Full Name : " , name);

//LOpping through an object
const shoppingCart = {
    productName : "T-Shirt",
    price : 500,
    color : "Black"
};
const keys = Object.keys(shoppingCart);
// console.log(keys);
for(let i = 0; i < keys.length ; i++){
    // console.log(keys[i]);
}

//split
const lyrics = "I am a Bandladeshi";
const parts = lyrics.split("a");
// console.log(parts);

//join
const lines = ["I am" , "I go"];
const newLines = lines.join(" ");
// console.log(newLines);

//swap variable
//approach 1
let first = 23;
let second = 24;
// let temp = first;
// first = second;
// second = temp;
// console.log(first , second);
//approch 2
[first , second] = [second , first] 
// console.log(first , second);

//splice
const count = [23 , 45, 55, 67, 54 , 2, 3, 4, 4, 6];
// console.log(count.splice(2 , 5 , 2));
// console.log(count);

/* M6 : Problem solving part : */
//1.
/* const multiplyFunc = (num1 , num2, num3) => num1*num2*num3;
const result = multiplyFunc(2,2, 4);
console.log(result); */
//2. 

/* const multlines = `
I am a developer.
I love to code.
I love to eat biriyani
`;

console.log(multlines); */

//3.
/* const addFunc = (num , num1 = 40) => {
    return num + num1;
}

console.log(addFunc(34));
 */
