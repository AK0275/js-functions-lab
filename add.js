const maxOfTwoNumbers = (x, y) => {
if (x >= y) {
return x;
} else {
return y;
}
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

const isAdult = (age) => {
if (age < 18) {
return 'Miner' 
} else {
return 'Adult' 
}
}


console.log('Exercise 2 Result:', isAdult(21));

const isCharAVowel = (character) => {
if (character === "a") {
return 'True'
} else {
return 'False'
}
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

const generateEmail = (name, domain) => {
return (name + domain)
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));

const greetUser = (user, time) => {
let greeting;
if (time === "morning") {
    greeting = 'Good morning'
} else if (time === "afternoon") {
    greeting = 'Good afternoon'
} else if (time === "evening") {
    greeting = 'Good evening'
} else {
    greeting = "Hello"
}
return `${greeting}, ${user}!`

}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

const maxOfThree = (a, b, c) => {
if (a, b, c) {
    return Math.max(a, b, c)
}
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

const calculateTip = (bill, tip) => {
if (bill / tip) {
return tip
}
}

console.log('Exercise 7 Result:', calculateTip(100, 10));

const convertTemperature = (temperature, scale) => {
if (scale === 'C') {
    return (temperature * 9/5) + 32;
} else if (scale === 'F') {
    return (temperature - 32) * 5/9;
} else {
    throw new Error("Invlid scale. Use 'C' for celsius or 'F' for fahrenheit.")
}
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

const basicCalculator = (num1, num2, operation) => {
    let op;
    if (operation === "add"){
op = "add"
    } else if (operation === "subtract"){
op = "subtract"
    } else if (operation === "multiply"){
op = "multiply"
    } else if (operation === "divide"){
op = "divide"
    } 
    num1 = 10
    num2 = 5
    return (num1, num2)
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

const calculateGrade = (grade) => {
if (grade >= 90) {
    return "A"
} else if (grade >= 80) {
    return "B"
} else if (grade >= 70) {
    return "C"
} else if (grade >= 60) {
    return "D"
}  else {
    return "F"
}
}

console.log('Exercise 10 Result:', calculateGrade(85));

const createUsername = (first, last) => {

const firstName = first.slice(0, 3);
const lastName = last.slice(0, 3);

const totalLength = first.length + last.length;
const username = firstName + lastName + totalLength;
return username;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));