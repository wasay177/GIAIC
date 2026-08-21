//Step 01 TypeScript Basics

// Variables
// Variable in Non-Programming
// Variable in Programming

let favoriteColor = "blue";
console.log(favoriteColor)
favoriteColor = "green";
console.log(favoriteColor);

// Case sensitive
camelCase
snake_case
PascalCase

// Strong Typing
// Non-Programming
// Strong Typing In Typescript
let userName: string = "Sir Ameen Alam";

Error: Type 'number' is not assignable to type 'string'.
let userName: string = "Sir Ameen Alam";
userName = 25

// Primitive Data Types
// Non-Programming
// Data Types in Typescript
let userName: string = "Ameen Alam"; // string
let age: number = 24; // Number
let isStudent: boolean = false; //Boolean
let randomValue: any = "https://www.linkedin.com/in/ameen-alam/"; // Any

// Comments in Code
Single-line Comments & Multi-line Comments
// This is Ameen Alam, a DevOps Architect.

/*
I recommend you use this platform.
You can follow me at https://linktr.ee/ameenalam
*/

// 50 Slides is covered on 16-7-2024

// Type Inference
// strongly typed syntax
let a : string = "Pakisatn";
let b : number = 9;
let c : boolean = true;

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
Undefined // Important
unknown // Important
BigInt // Important
Symbol // Important
Null // Important

// Errors
// Syntax Error
lett message = "Hello World"; // Syntax error
console.log(message);

// Type Error
let message = "Hello World";
console.loger(message);

// Assignability Error
let message = "Hello World";
message = 6;
console.log(message);

// String Concatenation
let firstname: string = 'Ameen';
let lastname: string = 'Alam';
let fullName: string = firstname + ' ' + lastname;
console.log(fullName)

// Template Literals
let firstname: string = 'Ameen';
let lastname: string = 'Alam';
let fullName: string = `${firstname} ${lastname}`;
console.log(fullName);

// Modules

// Operators in Typescript
// Imagine you're at a grocery store
// Addition(+)
let num1: number = 2;
let num2: number = 3;
let cart: number = num1 + num2;
console.log(cart) // 5

// subtraction(-)
let cart: number = 5;
let num3: number = 2;
let total: number = cart - num3;
console.log(total) // 3

// Multiplication(*)
let bags: number = 4;
let apples: number = 5;
let totalApples: number = bags * apples;
console.log(totalApples) // 20

// Division(/)
let totalApples: number = 20;
let bags: number = 4;
let eachBags: number = totalApples / bags;
console.log(eachBags) // 5

// 54 Slides is covered on 18-7-2024

// Exponentiation(**)
let layer:number = 5
let apple:number = 5
let power:number = layer ** 2
console.log(power) // 25

// Modulus(%)
let apple = 5
let bags = 2
let reminder = apple % bags;
console.log(reminder) // 1

// Unary operators(++)(--)
let a=5
let b=2
a++; // a becomes 6
b--; // b becomes 1

let a=5
let b=2
++a; // a becomes 6
--b; // b becomes 1

// Home Work
let a: number = 5; let b: number = 2;
let c: number;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);

let a:number=5;
let b:number=2;
let c:number;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);

// Combining Operatorss
let result = 3 + 4 * 5;
console.log(result)
// Answer will be 23 or 35 or ??

let result = 3 + 4 * 5;
result++
console.log(result)
// Answer will be 23 or 24 or 35 or 36 or ??

// Addition Calculator
// 2 + 3 = ?
import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "kindly enter your first no:"
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kindly enter your second no:"
});
let total: number = input1.num1 + input2.num2
console.log(total);

// BMI Calculator
let weightInKg = 70; // 70kg
let heightInMeters = 1.75; // 1.75m
let bmi = weightInKg / (heightInMeters * heightInMeters)
console.log(`Your BMI is ${bmi}`); 

// Home Work

// Assignment Operators(=)
let c = 10;
c += 5;
// equivalent to c = c + 5, c is now 15

// Comparison Operators
let a=5
let b=2
let isEqual = (a == b); // false
let isNotEqual = (a != b); // true
let isGreaterThan = (a > b); // true
let isLessThan = (a < b); // false

// Logical Operators
let a=5
let b=2
let logicalAnd = (a > 0) && (b > 0); // true
let logicalOr = (a < 0) || (b > 0); // true
let logicalNot = !(a > 0); // false

// Logic Statements
// If and If-Else Statements
let isRaining = true;
if (isRaining) {
    console.log("Wear a raincoat.");
} else {
    console.log("Wear sunglasses.");
}

let isRaining = false;
if (isRaining) {
    console.log("Wear a raincoat.");
} else {
    console.log("Wear sunglasses.");
}

// Else If Statements
let weather = "cloudy";
if (weather === "raining") {
    console.log("Wear a raincoat.");
} else if (weather === "cloudy") {
    console.log("Wear a light jacket.");
} else {
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
        break 
    default:
        console.log("Work on a hobby.");       
}

// Self-Check Quiz
let answer: string = "correct"
if (answer === "correct") {
    console.log("You got it right!");
} else {
    console.log("Sorry, that's not correct.");
}

// Evaluating a Number Game
let guess: number = 7;
let target: number = 5;
if (guess < target) {
    console.log("Your guess is too low.");
} else if (guess > target) {
    console.log("Your guess is too high.");
} else {
    console.log("Your guessed correctly!");
}

// Friend Checker Game
let isFriend: string = "Ameen"
if (isFriend === "Ameen" || isFriend === "Daniyal") {
    console.log(`${isFriend} is your friend.`);
} else {
    console.log(`${isFriend} is not your friend.`);
}

let isFriend: string = "Hamzah"
if (isFriend === "Ameen" || isFriend === "Daniyal") {
    console.log(`${isFriend} is your friend.`);
} else {
    console.log(`${isFriend} is not your friend.`);
}

import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your friend name:"
}]);
if (isFriend.name === "Ameen" || isFriend.name === "Daniyal") {
    console.log(`${isFriend.name} is your friend.`);
} else {
    console.log(`${isFriend.name} is not your friend.`);
}

// Rock Paper Scissors Game
let player1: string = "Rock"
let player2: string = "Scissors"
if (player1 === player2) {
    console.log("It's a tie!");
} else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("Player 1 wins!");
} else {
    console.log("player 2 wins!");
}

// Home Work
// Create a Calculator

// Functions
// Basic Functions
function halfFryEgg() {
    let cocked = 1 + 1.5 + 2;
    // Egg + Butter + Salt
    console.log(cocked)
}
halfFryEgg() // Invoking the function

// Returning Function Values
function halfFryEgg(): number {
    let cocked = 1 + 1.5 + 2;
    // Egg + Butter + Salt
    return cocked
}
// Invoking the function
let response: number = halfFryEgg()
    console.log(response)

// Parameters and Arguments
function halfFryEgg(egg: number, butter: number, salt: number): number {
    return egg + butter + salt; 
}

let response: number = halfFryEgg(1, 1.5, 2)
console.log(response)

// 30 Slides is covered on 21-7-2024

function addNumbers(a: number, b: number): number {
    return a + b; 
}

let response = addNumbers(5, 3) // Invoking the function
console.log(response);

function calculateArea(width: number, height: number): number {
    return width * height; 
}

let response: number = calculateArea(100, 50)
console.log(response);

// Default Parameters
function halfFryEgg(
    egg: number = 1, butter: number = 1.5, salt: number = 2
): number {
    return egg + butter + salt; 
}

let response: number = halfFryEgg()
console.log(response)

function halfFryEgg(
    egg: number = 1, butter: number = 1.5, salt: number = 2
): number {
    return egg + butter + salt; 
}

let response: number = halfFryEgg(1, 1.5, 3)
console.log(response)

// Rest Parameters
function halfFryEgg(egg: number = 1, ...ingredients: number[]) {
    console.log(egg) 
    console.log(ingredients) 
}
halfFryEgg(1, 1.5, 2, 5)

// Spread Operator
function halfFryEgg(egg: number = 1, ...ingredients: number[]) {
    console.log(egg) 
    console.log(...ingredients) 
}
halfFryEgg(1, 1.5, 2, 5)

// Arrow Functions
let halfFryEgg = () => 1 + 1.5 + 3;
                    // egg + butter + salt
let response: number = halfFryEgg()
console.log(response)

let halfFryEgg = (egg: number, butter: number, salt: number): number => (
    egg + butter + salt 
)

let response: number = halfFryEgg(1, 1.5, 2)
console.log(response)

let halfFryEgg = () => {return 1 + 1.5 + 3 };
                       // egg + butter + salt
let response: number = halfFryEgg()
console.log(response)

let halfFryEgg = () => {
    // egg + butter + salt
    let cocked = 1 + 1.5 + 3;
    return cocked
};
let response: number = halfFryEgg()
console.log(response)

let halfFryEgg = (egg: number, butter: number, salt: number): number => {
    let cocked = egg + butter + salt;
    return cocked 
};
let response: number = halfFryEgg(1, 1.5, 2)
console.log(response)

// Variable Scope
// Global Variables
// Local Variables
let globalVar ="Accessible everywhere";
function showExample () {
    let localVar = "Accessible only inside this function";
    console.log(globalVar); // Works
}
console.log(localVar); // Error: localVar is not defined

// Hoisting
// Hoisting with Let and Const

// Anonymous Function 
let halfFryEgg = function () {
    let cocked = 1 + 1.5 + 2;
    console.log(cocked);
}
halfFryEgg()

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Runs immediately");
})();

// 30 Slides is covered on 22-7-2024

// Recursive Functions
function countdown(number: number): void {
    if (number <= 0) {
        console.log("Done!");
        return;
    }
    console.log(number);
    countdown (number - 1);
}
countdown(5);

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
let response = factorial(5);
console.log(response);

// Nested Functions
function outerFunction() {
   const innerFunction = function () {
       console.log("Hello from inside!");
   }
   innerFunction();
}
outerFunction();

// Function Callbacks
function processUserInput(callback:any) {
    let name = "Sir Ameen Alam";
    callback(name);
}
processUserInput(function(name:string) {
    console.log("Hello, " + name);
});

function processUserInput(callback: (name: string) => void) {
    let name = "Sir Ameen Alam";
    callback(name);
}
processUserInput(function (name: string) {
    console.log("Hello, " + name);
});

// Set Timeout Order
setTimeout(() => {
    console.log("Cake is ready!");
}, 2000); // Waits 2 seconds

// Self-Check Quiz
import inquirer from "inquirer";
let input1 = await inquirer.prompt([{
    name: "userAnswer",
    type: "string",
    message: "What is the capital of France?"}
]);
function quiz (question: string, correctAnswer: string) {
    if (input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log("Correct!");
    } else {
        console.log("Wrong answer. Try again.");
    }
}
quiz("What is the capital of France?", "Paris");

// Home Work
// Assignments

// Basic Objects in Typescript
// Defining a basic object in Typescript
let person = {
    name = "Ameen Alam"
};
// Accessing properties of the object
console.log(person.name); // Output: Ameen Alam

// Defining a basic object in Typescript
let person: { name: string} = {
    name: "Ameen Alam"
};
console.log(person.name); 
// Output: Ameen Alam

// Defining a basic object in Typescript
let person: { name: string; age: number; address: string;} = {
    name: "Ameen Alam",
    age: 24,
    address: "123 ABC Street"
};
// Accessing properties of the object
console.log(person.name); // Output: Ameen Alam 
console.log(person.age); // Output: 24
console.log(person.address); // Output: 123 ABC Street

// Modifying an object's properties
person.age = 18;
console.log(person.age); // Output: 18

// Modifying an object's properties
person.age = 18;
console.log(person.age); // Output: 18

// Adding a new property
person.email = "alice@example.com";
// Error: Property 'email' does not exist on type...

// Type Alias in Typescript
type User = {
    name: string;
    age: number;
    hasPet: boolean;
};
// Now you can use the 'User' type alias to define objects
let User1: User = {
    name: "Ameen Alam",
    age: 24,
    hasPet: true
};

// Another example with a complex type for a function
type Operation = (x: number, y: number) => number;
const add: Operation = (x, y) => x + y;
const subtract: Operation = (x, y) => x - y;
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6

// Type Literal
let drinkSize: "Small" | "Medium" | "Large";
drinkSize = "Medium"; // Valid
drinkSize = "Small";  // Valid

let drinkSize: "Small" | "Medium" | "Large";
drinkSize = "Medium"; // Valid
drinkSize = "Small";  // Valid
drinkSize = "Mega";
// Error: Type
// '"Mega"' is not assignable to type '"Small" | "Medium" | "Large"'.

// Type Unions
let mixedBag: string | number;

mixedBag = "Sunscreen"; // OK
mixedBag = 30; // OK, maybe representing the SPF of the sunscreen

// mixedBag = true;
// Error: Type 'boolean' is not assignable to type 'string | number'.

// Type Intersection
type BeachGear = {
    sunscreen: boolean;
    towel: boolean;
}
type MountainGear = {
    waterBottle: boolean;
    map: boolean;
}
type AdventureGear = BeachGear & MountainGear;
let myGear: AdventureGear = {
    sunscreen: true,
    towel: true,
    waterBottle: true,
    map: true
};

// Arrays and Their Properties
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // 3
console.log(fruits[1]);
// "Banana" - Accessing the second element (index starts at 0)

let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // 3
console.log(fruits[1]);
// "Banana" - Accessing the second element (index starts at 0)

// 60 Slides is covered on 24-7-2024

// Array Methods
let colors: string[] = ["Red", "Green", "Blue"];

colors.push("Yellow"); // Adds "Yellow" to the end
colors.pop(); // Removes the last element ("Yellow")
colors.shift(); // Removes the first element ("Red")
colors.unshift("Purple"); // Adds "Purple" to the start

console.log(colors); // ["Purple", "Green", "Blue"]

// Multidimensional Arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);
// 6 - Accessing the third element in the second array

// Working with Objects and Arrays
type Book = {
    title: string;
    author: string;
    isbn: string;
};
let library: Book[] = [
    {title: "The Hobbit", author: "J.R.R Tolkien", isbn: "123456789" },
    {title: "1984", author: "George Orwell", isbn: "987654321" }
];

type Book = {
    title: string;
    author: string;
    isbn: string;
};
let library: Book[] = [
    {title: "The Hobbit", author: "J.R.R Tolkien", isbn: "123456789" },
    {title: "1984", author: "George Orwell", isbn: "987654321" }
];
// Adding a new book to the array
library.push({
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "1112131415"
});

// Finding a book by author
let foundBook = library.find(book => book.author === "George Orwell");
console.log(foundBook);
// Output { title: "1984", author: "George Orwell", isbn: "987654321"}

// Home Work
// Assignments

// Tuples
let coffeeOrder: [string, string] = ["Cappuccino", "Medium"];
                          // Tuple: [Coffee Type, Size]

// Enums
enum CoffeeType {
    Espresso,
    Latte,
    Cappuccino,
    Americano
}   

let myCoffee: CoffeeType = CoffeeType.Latte;
console.log(myCoffee);

// While Loop
let minutesUntilBusArrives = 5;

while (minutesUntilBusArrives > 0) {
    console.log(`Bus arrives in ${minutesUntilBusArrives} minutes.`);
    minutesUntilBusArrives--;
}

// Do-While Loop
let minutesUntilBusArrives = 5;

do{
    console.log("Checking for the bus...");
    /* Assume checkBusArrival() decreases minutesUntilBusArrives
    and returns false when the bus arrives */
} while (minutesUntilBusArrives > 0);

let minutesUntilBusArrives = 5;

do{
    console.log("Checking for the bus...");
        minutesUntilBusArrives--;
    /* Assume checkBusArrival() decreases minutesUntilBusArrives
    and returns false when the bus arrives */
} while (minutesUntilBusArrives > 0);

let minutesUntilBusArrives = 5;
function checkBusArrival() {
    minutesUntilBusArrives--;
    if (minutesUntilBusArrives != 0) {
        return "Checking for the bus..."
    } else {return false }
}
do{
    let response = checkBusArrival()
    console.log(response)
    /* Assume checkBusArrival() decreases minutesUntilBusArrives
    and returns false when the bus arrives */
} while (minutesUntilBusArrives > 0);

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Watering plant ${i + 1}`);
}

// 40 Slides is covered on 25-7-2024

// For-In Loop
let person:any = {
    name: "Alice", age: 30, city: "Wonderland"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// For-Of Loop
let flavors = [
    "Vanilla", "Chocolate", "Strawberry", "Mint"
];

for (let flavor of flavors) {
    console.log(flavor);
};

// Home Work
// Assignments

// 1. Loop through an Array with For-Of
const favoriteMovies: string[] = [
    "Inception", "The Matrix", "Interstellar"
]; 

function printMovies(movies: string[]) {
    for (const movie of movies) {
        console.log(movie);
    }
}

printMovies(favoriteMovies);

// 2. Enumerate Properties with For-In Loop
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
function printCarDetails(car: {[key: string]: string | number}) {
    for (const key in car) {
        console.log(`${key}: ${car[key]}`);
    }
}
printCarDetails(car);

// 3. Basic For Loop Exercise (FizzBuzz)
function fizzBuzz() {
   for (let i = 1; i <= 100; i++) {
       let output = '';
       if (i % 3 === 0) output += 'Fizz';
       if (i % 5 === 0) output += 'Buzz';
       console.log(output || i);
    }
}

fizzBuzz();

// Modules
let a = 5;

export default a;

import a from "./main";

console.log(a);
 
import inquirer from "inquirer";

let answers = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your Age:"
});

console.log("Insha Allah, in " + (60 - answers.age) + "years you will be 60 years old.");

import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + "years you will be 60 years old."));

// Complete Slides Worked on 26-7-2024