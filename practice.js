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

