const { addStrings, array1 } = require("./chapter_2")

//// data manipulation

let exampleSentence = 'this is a string'
let stringLength = exampleSentence.length 
console.log('Value at the end: ', exampleSentence[stringLength - 1])

let combinedString = 'hello world' + ' ' + 'my name is James'
console.log(combinedString) 

let coercedString = '3' + 5 
console.log(coercedString)

// .indexOf()
// .split()
// .includes()
// .replace() .replaceAll()

const sliced = exampleSentence.slice(0, 7)
console.log(sliced)

//// array and lists

let simpleArray = ['zach', 'is', 'cool']
// console.log(simpleArray[0]) 

simpleArray[0] = 'nick'
// console.log(simpleArray[0]) 

//// pop push shift unshift
simpleArray.push('pushedWord')
simpleArray.pop()
simpleArray.shift()
simpleArray.unshift('Ashley')
simpleArray.join(' ')

// console.log(simpleArray)

let simpleArray2 = [ [1, 2], [3, 4] ]

for (let i = 0; i < simpleArray2.length; i++) {
  let subArray = simpleArray2[i]
  for (let j = 0; j < subArray.length; j++) {
    // console.log(i, j)
  }
}

//// objects

const bio = {
  name: 'Joe',
  age: 32,
  hobbies: ['gym', 'coding', 'reading'],
  friends: {
    'juan': {
      desc: 'good at soccer'
    }
  }
}

let nameKey = 'name'
bio[nameKey] = 'henry'
bio['numOfFriends'] = 10 // initialize new keys and values

// console.log(bio['numOfFriends'])

// console.log('age' in bio)
// console.log('NumOfBananas' in bio)

bio.age = 29
// console.log(bio['age'])

delete bio.age
// console.log(bio)

// console.log(bio.friends.juan.desc)

// console.log(Object.keys(bio)) // returns array of all the keys in bio object
// console.log(Object.values(bio)) // return array of all values
// console.log(Object.entries(bio)) // return array or arrays

bio.joke // returns undefined
'joke' in bio // returns false

//// scoping

function hellWorld() {
  let sentence = 'hello world'
  // console.log(sentence)
}

//// closures
// return function retains access to a variable from outer scope even after finished executing 

function counter() {
  let count = 0 

  return function () {
    count ++
    console.log(count)
  }
}

let increment = counter()

increment()
increment()

// modular code - imported from chapter 1

console.log(addStrings('goodbye', 'world'))

//// error handling and debuggin

const brokenObject = {
  word: 'nice'
}

function problemCodeBlock() {
  try {
    console.log('attempted try block')
    const subObject = brokenObject.hello.world
    console.log(subObject)
  } catch (err) { 
    // if this catches an error, it will skip the code in the try block
    console.log(err.message)
  } 
}

// problemCodeBlock()

function throwError() {
  throw new Error('custom error message')
}

throwError()

