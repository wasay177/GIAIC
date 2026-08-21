"use strict";
//Step 01 TypeScript Basics
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Variables
// Variable in Non-Programming
// Variable in Programming
let favoriteColor = "blue";
console.log(favoriteColor);
favoriteColor = "green";
console.log(favoriteColor);
// Case sensitive
camelCase;
snake_case;
PascalCase;
// Strong Typing
// Non-Programming
// Strong Typing In Typescript
let userName = "Sir Ameen Alam";
Error: Type;
'number';
is;
not;
assignable;
to;
type;
'string'.
;
let userName = "Sir Ameen Alam";
userName = 25;
// Primitive Data Types
// Non-Programming
// Data Types in Typescript
let userName = "Ameen Alam"; // string
let age = 24; // Number
let isStudent = false; //Boolean
let randomValue = "https://www.linkedin.com/in/ameen-alam/"; // Any
// Comments in Code
Single - line;
Comments & Multi - line;
Comments;
// This is Ameen Alam, a DevOps Architect.
/*
I recommend you use this platform.
You can follow me at https://linktr.ee/ameenalam
*/
// 50 Slides is covered on 16-7-2024
// Type Inference
// strongly typed syntax
let a = "Pakisatn";
let b = 9;
let c = true;
// type inference
let e = "USA";
let f = 10.9;
let g = false;
// Variables Advance
// Const and let
// Non-Programming
// Const and let in Typescript
let currentBalance = 100; // This value can change
const accountNumber = "123456789"; // This value remains constant
currentBalance = 50; // This is allowed
// accountNumber = "987654321"; // Error: Cannot assign to 'accountNumber' because it is a constant.
// Additional Primitive Data Types
Undefined; // Important
unknown; // Important
BigInt; // Important
Symbol; // Important
Null; // Important
// Errors
// Syntax Error
lett;
message = "Hello World"; // Syntax error
console.log(message);
// Type Error
let message = "Hello World";
console.loger(message);
// Assignability Error
let message = "Hello World";
message = 6;
console.log(message);
// String Concatenation
let firstname = 'Ameen';
let lastname = 'Alam';
let fullName = firstname + ' ' + lastname;
console.log(fullName);
// Template Literals
let firstname = 'Ameen';
let lastname = 'Alam';
let fullName = `${firstname} ${lastname}`;
console.log(fullName);
// Modules
// Operators in Typescript
// Imagine you're at a grocery store
// Addition(+)
let num1 = 2;
let num2 = 3;
let cart = num1 + num2;
console.log(cart); // 5
// subtraction(-)
let cart = 5;
let num3 = 2;
let total = cart - num3;
console.log(total); // 3
// Multiplication(*)
let bags = 4;
let apples = 5;
let totalApples = bags * apples;
console.log(totalApples); // 20
// Division(/)
let totalApples = 20;
let bags = 4;
let eachBags = totalApples / bags;
console.log(eachBags); // 5
// 54 Slides is covered on 18-7-2024
// Exponentiation(**)
let layer = 5;
let apple = 5;
let power = layer ** 2;
console.log(power); // 25
// Modulus(%)
let apple = 5;
let bags = 2;
let reminder = apple % bags;
console.log(reminder); // 1
// Unary operators(++)(--)
let a = 5;
let b = 2;
a++; // a becomes 6
b--; // b becomes 1
let a = 5;
let b = 2;
++a; // a becomes 6
--b; // b becomes 1
// Home Work
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
// Combining Operatorss
let result = 3 + 4 * 5;
console.log(result);
// Answer will be 23 or 35 or ??
let result = 3 + 4 * 5;
result++;
console.log(result);
// Answer will be 23 or 24 or 35 or 36 or ??
// Addition Calculator
// 2 + 3 = ?
const inquirer_1 = __importDefault(require("inquirer"));
const input1 = await inquirer_1.default.prompt({
    name: "num1",
    type: "number",
    message: "kindly enter your first no:"
});
const input2 = await inquirer_1.default.prompt({
    name: "num2",
    type: "number",
    message: "kindly enter your second no:"
});
let total = input1.num1 + input2.num2;
console.log(total);
// BMI Calculator
let weightInKg = 70; // 70kg
let heightInMeters = 1.75; // 1.75m
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`Your BMI is ${bmi}`);
// Home Work
// Assignment Operators(=)
let c = 10;
c += 5;
// equivalent to c = c + 5, c is now 15
// Comparison Operators
let a = 5;
let b = 2;
let isEqual = (a == b); // false
let isNotEqual = (a != b); // true
let isGreaterThan = (a > b); // true
let isLessThan = (a < b); // false
// Logical Operators
let a = 5;
let b = 2;
let logicalAnd = (a > 0) && (b > 0); // true
let logicalOr = (a < 0) || (b > 0); // true
let logicalNot = !(a > 0); // false
// Logic Statements
// If and If-Else Statements
let isRaining = true;
if (isRaining) {
    console.log("Wear a raincoat.");
}
else {
    console.log("Wear sunglasses.");
}
let isRaining = false;
if (isRaining) {
    console.log("Wear a raincoat.");
}
else {
    console.log("Wear sunglasses.");
}
// Else If Statements
let weather = "cloudy";
if (weather === "raining") {
    console.log("Wear a raincoat.");
}
else if (weather === "cloudy") {
    console.log("Wear a light jacket.");
}
else {
    console.log("Wear sunglasses.");
}
// 46 Slides is covered on 19-7-2024
// Conditional Ternary Operators
let isHungry = true;
let snack = isHungry ? "apple" : "water";
console.log(`You should have some ${snack}.`);
let isHungry = false;
let snack = isHungry ? "apple" : "water";
console.log(`You should have some ${snack}.`);
// Switch Statements
let dayOff = "Sunday";
switch (dayOff) {
    case "Saturday":
        console.log("Go hiking.");
        break;
    case "Sunday":
        console.log("Read a book.");
        break;
    default:
        console.log("Work on a hobby.");
}
// Self-Check Quiz
let answer = "correct";
if (answer === "correct") {
    console.log("You got it right!");
}
else {
    console.log("Sorry, that's not correct.");
}
// Evaluating a Number Game
let guess = 7;
let target = 5;
if (guess < target) {
    console.log("Your guess is too low.");
}
else if (guess > target) {
    console.log("Your guess is too high.");
}
else {
    console.log("Your guessed correctly!");
}
// Friend Checker Game
let isFriend = "Ameen";
if (isFriend === "Ameen" || isFriend === "Daniyal") {
    console.log(`${isFriend} is your friend.`);
}
else {
    console.log(`${isFriend} is not your friend.`);
}
let isFriend = "Hamzah";
if (isFriend === "Ameen" || isFriend === "Daniyal") {
    console.log(`${isFriend} is your friend.`);
}
else {
    console.log(`${isFriend} is not your friend.`);
}
let isFriend = await inquirer_1.default.prompt([{
        name: "name",
        type: "string",
        message: "Enter your friend name:"
    }]);
if (isFriend.name === "Ameen" || isFriend.name === "Daniyal") {
    console.log(`${isFriend.name} is your friend.`);
}
else {
    console.log(`${isFriend.name} is not your friend.`);
}
