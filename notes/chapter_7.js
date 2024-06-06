//// ES6+

//// arrow functions
//// ternary operator
//// optional chaining
//// object destructuring
//// array destructuring
//// template literals
//// short circuits && ||
//// enhanced object literals
//// spread operator
//// array methods

// const { Express } from "express"

//// arrow functions

(input) => {console.log('Executed anonymous function')}

const myFunction = (input) => {
  console.log('Executed named arrow function')

  myFunction()
}

//// Ternary operator ? = one liner if/else statement

let friends = ['jane', 'mike', 'ann']

let isJaneFriend = friends.includes('jane') ? true : false

// if (friends.includes('jane')) {
//   isJaneFriend = true
// } else {
//   isJaneFriend = false
// }

console.log(isJaneFriend)

//// optional chaining

const james = {
  hobbies: {
    skiing: {
      pairsOfSkis: 1
    }
  }
}

console.log(james.hobbies.skiing.pairsOfSkis)
console.log(james?.hobbies?.football?.pairsOfBoots)

//// object destructuring

let person = {
  name: 'james',
  age: 27
}

const { name: person_name, age } = person 

console.log(person_name, age)

//// array destructuring

let oldArray = [1, 2]

const [value1, value2] = oldArray

console.log(value1, value2)

//// template literals

let myName = 'Zach'

console.log(`Hello, my name is ${myName}.`)

//// short circuits && ||

let personDict = { name: 'john' }

let personName2 = personDict.name && 'johnny'
// if personDict.name is 'true', reassigns name to johnny

let personName3 = personDict.name || 'default name'
// assigns personDict.name to personName3 if exists, if not, uses backup

console.log(personName2, personName3)

//// enhanced object literals

let breed = 'corgi'
let animal = 'dog'

// creates key with variable name and assigns that variables current value as the key value
const animalInfo = {
  breed,
  animal
}

//// spread operator

let demoArray = [1, 2, 3, 4, 5]
let demoArray2 = [...demoArray, 6, 7, 8]

let demoObject = {
  favoriteColor: 'blue'
}

let demoObject2 = {
  ...demoObject,
  favoriteFood: 'vanilla'
}

console.log(demoArray2, demoObject2)

//// array methods

let myCoolArray = [3, 152, 21, 52, 12, 0, 123, 75, 98]

// forEach() 

myCoolArray.forEach((currentValue, currentIndex) => {
  console.log(`The current value is ${currentValue} at location ${currentIndex}`)
})

// map()

let myCoolerArray = myCoolArray.map((currentValue, currentIndex) => {
  return currentValue * 2
})

// filter()

let EvensArray = myCoolArray.filter((currentValue, currentIndex) => {
  return currentValue % 2 === 0 
})

let OddsArray = myCoolArray.filter((currentValue, currentIndex) => {
  return currentValue % 2 !== 0 
})

console.log(EvensArray, OddsArray)

// reduce()

let reducedArray = myCoolArray.reduce((accumulator, currentValue, currentIndex) => {
  console.log(`ACCUMULATOR: ${accumulator}\nCURRENT_VALUE: ${currentValue}\nCURRENT_INDEX: ${currentIndex}\n`)
  return accumulator + ` , ${currentValue}:${currentIndex}`
}, '')

console.log(reducedArray)