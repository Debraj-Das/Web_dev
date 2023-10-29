//* Basic of javascript
const prompt = require("prompt-sync")();

// let myname = prompt("Enter your name : ");

// let firstCharacter = myname.slice(0 , 1);

// firstCharacter = firstCharacter.toUpperCase();

// let restCharacter = myname.slice(1, myname.length);

// restCharacter = restCharacter.toLowerCase();

// myname = firstCharacter + restCharacter;

// console.log(myname);

// Practise the Code the function

// function sum(a, b)
// {
//     return a+b ;
// }

// console.log(sum(20, 34));

// Some practise Question

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft\n");
  let numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("\nmoveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;
}

let money = prompt("Enter the money : ");
let change = getMilk(money);
console.log("\nYour change is " + change);
