//Primitive 
// 7 types : Sting , Number , Boolean , null , undefined , Symbol , BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log (id === anotherId);

const bigNumber = 35126357821638823712213n
console.log(typeof (bigNumber))

//References (Non-primitive)
// Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name:'Zakir',
    age: 22,
    class: "BCA"
}

const myFunction = function(){
    console.log("Hello World");
}