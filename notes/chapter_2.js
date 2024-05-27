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

console.log(bio['numOfFriends'])

console.log('age' in bio)
console.log('NumOfBananas' in bio)

bio.age = 29
console.log(bio['age'])

delete bio.age
console.log(bio)

console.log(bio.friends.juan.desc)

console.log(Object.keys(bio)) // returns array of all the keys in bio object
console.log(Object.values(bio)) // return array of all values
console.log(Object.entries(bio)) // return array or arrays

bio.joke // returns undefined
'joke' in bio // returns false