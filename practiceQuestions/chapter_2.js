// 1. Define the variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let fullname = 'Zacharie'
fullname = fullname + ' ' + 'McGee'
console.log(fullname)

// 2. How would you compare two variables, a and b, to check equal?

let a = 1
let b = '1'

console.log(a, b)

if (a === b) {
  console.log('equal')
} else {
  b = a
  console.log(a, b)
}

// 3. Write an if else statement in JS that checks if a number stored in a variable labelled as age is greater than 18. If true, log 'Adult', else log 'Minor'.

let ages = [16, 18, 20, 23, 15, 16, 34, 25]

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log('Adult')
  } else {
    console.log('Minor')
  }
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(j)
  }
}

// 5. Given an array of numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.

let array = [5,10,12,43,2,52,12,20,30,4]
let total = 0
let k = 0

while (k < array.length && total < 100) {
  total = total + array[k]
  k++
  console.log(total)
}

// 6. Define a function named calculateArea that takes two params, width and height, and retrns the area of a rectangle.

let width = 200;
let height = 3;

function calculateArea(a, b) {
  return a * b
}

console.log('Area: ', calculateArea(width, height))