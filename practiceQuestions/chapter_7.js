// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?
 
let value = 'dynamic text'
let templateLit = `static text and ${value}`

// 2. Convert the following function into an arrow function syntax:

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => {
  return a + b
}

// (a, b) => { return a + b }

// 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.

const person = {
  name: 'james',
  age: 27
}

const {name, age} = person
console.log(name, age)

// 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.

const colors_array = ['red', 'green', 'blue']

const [first, second, third] = colors_array
console.log(first, second, third)

// 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?

let arr1 = [1, 2, 3, 7]
let arr2 = [4, 5, 6, 7]

let arr3 = [...arr1, ...arr2]
console.log(arr3)

// 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?

let obj1 = { name: 'henry', age: 14 }
let obj2 = { name: 'gregothy', color: 'blue' }

let combinedObject = {
  ...obj1,
  ...obj2
}

console.log(combinedObject)

// 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?

const user = { name: 'james' }
console.log(user?.street)

// 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".

const greet = (name, greeting = "Hello") => {
  console.log(`${greeting}, my name is ${name}`)
}

greet('Johnny')
greet('Plax', 'Greetings Earthling')

// 9. Explain the difference between let and const keywords, and give an example of when you would use each.

// let defines a variable that can be changes, const defines a value that can't be changed

// 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.

let new_array = [1, 2, 3, 4]

console.log('\nMETHOD 1:\n')
new_array.forEach(val => console.log(val))

console.log('\nMETHOD 2:\n')
for (let i=0; i<new_array.length;i++) {
  console.log(new_array[i])
}

console.log('\nMETHOD 3:\n')
for (let currentVal of new_array) {
  console.log(currentVal)
}

// 11. Given an array of numbers, use the map method to create a new array with each number squared.

let original_array = [2, 4, 5, 6, 8, 93]
let squared_array = original_array.map(val => val * val)
console.log(squared_array)

// 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?

let currentAge = 23
let ageStatus = currentAge < 18 ? 'minor' : 'adult'
console.log(ageStatus)

// 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?

const logMessage = () => { console.log('Message') }

let isLoggedIn = true
isLoggedIn && logMessage()

isLoggedIn = false
isLoggedIn && logMessage()

// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?

let user_2 = {
  name: 'stringbean'
}

let username = user_2.name || 'guest'
console.log(username)