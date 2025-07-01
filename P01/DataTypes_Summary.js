// Primitive DataType
// Call by value : copy the original data
// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3
const isLoggedin = false
const temp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123') // both are different

// console.log(id == anotherId);

const bigInt = 1234567890123123456n


// Reference (NON Primitive)

// Array, Objects, Functions

const heroes = ["Kunj", "Dhruvam","Tirth"]

let myobj = {
    name: "Kunj",
    age: 20
}

const myfunc = function(){
    console.log("Hello Kunj , Keep Going");   
}

console.log(typeof bigInt);
console.log(typeof myfunc);
console.log(typeof myobj);
