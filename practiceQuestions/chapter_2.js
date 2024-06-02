// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

let exampledArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// method 1 - nondestructive
let filteredArray1 = exampledArray1.filter((num) => num % 2 === 0)
// console.log(filteredArray1)

//method 2 - destructive
for (let i = 0; i < exampledArray1.length; i++) {
  if (exampledArray1[i] % 2 !== 0) {
    exampledArray1.splice(i, 1)
  }
}
// console.log(exampledArray1)

//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.

const names_and_ages = [
  { name: 'james', age: 27 },
  { name: 'lucy', age: 31 },
  { name: 'juan', age: 102 },
  { name: 'jennifer', age: 18}
]

let oldest = '';
let oldestAge = 0;

for (let i = 0; i < names_and_ages.length; i++) {
  if (names_and_ages[i].age > oldestAge) {
    oldestAge = names_and_ages[i].age
    oldest = names_and_ages[i].name
  } 
}

// console.log(oldest)

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.

let array_of_strings = ['4', '8', '2', '10', '5']

for (let i = 0; i < array_of_strings.length; i++) {
  array_of_strings[i] = parseInt(array_of_strings[i])
}

// console.log(array_of_strings)

// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }
]

function compareFn(a, b) {
  return a.price - b.price 
}

let sortedArray = array_of_objects.sort(compareFn) 
// console.log(sortedArray)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

let demo_array = [0, 1, 2, 3, 4, 5]

function snipArray(arr) {
  return arr.slice(1, arr.length - 1)
}

// console.log(snipArray(demo_array))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.

let shopping_cart = {
  'cheese': {
      quantity: 4,
      price: 8
  },
  milk: {
      quantity: 10,
      price: 4
  }
}

let total = 0

function totalCost(obj) {
  let objectKeys = Object.keys(obj)
  // console.log(objectKeys)

  for (let i = 0; i < objectKeys.length; i++) {
    let currentKey = objectKeys[i]
    const keyData = shopping_cart[currentKey]

    let productTotal = keyData.price * keyData.quantity
    total += productTotal
  }
  return total
}

totalCost(shopping_cart)
// console.log(total)

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

let friends = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

// deceptive -> below doesn't work -> adding james to originally object -> becomes included in cloned obj -> solution is to deep clone

// function cloner(obj) {
//   let clonedObject = obj
//   return clonedObject
// }
// friends.james = {
//   hobbies: ['sleep']
// }

// console.log(cloner(friends))

let newFriends = {}

function deepClone(objToClone) {
  let keys = Object.keys(objToClone)
  for (let i = 0; i < keys.length; i++) {    
    let currentKey = keys[i]
    newFriends[currentKey] = objToClone[currentKey]
  }  
}

deepClone(friends)
// console.log('Cloned Object: ', newFriends)


// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

let student = {
  chemistry: {
      grade: 9
  },
  physics: {
      grade: 7
  },
  maths: {
      grade: 1
  }
}

function calcAverageGrade(studentObj) {
  let total = 0;
  let subjects = Object.keys(studentObj)

  for (let i = 0; i < subjects.length; i++) {
    let currentKey = subjects[i]
    total += studentObj[currentKey].grade
  }

  return total / subjects.length
}

console.log(calcAverageGrade(student))

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.

function counter() {
  let timesCalled = 0;

  return function () {
    timesCalled++
    console.log(timesCalled)
  }
}

const incrementer = counter()

incrementer()
incrementer()
incrementer()
incrementer()
incrementer()

// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.

let grades_array = [
  { subject: 'maths', grade: 10 },
  { subject: 'spanish', grade: 2 },
  { subject: 'literature', grade: 6 }
]

function compareFn(a, b) {
  return b.grade - a.grade 
}

let sortedGrades = grades_array.sort(compareFn) 
console.log(sortedGrades)

// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

// method 1 - nondestructive

let filteredArrayOfShortStrings = array_of_short_strings.filter(item => item.length >= 5)
console.log(filteredArrayOfShortStrings)

// method 2 - destructive

for (let i = 0; i < array_of_short_strings.length; i++) {
  if (array_of_short_strings[i].length < 5) {
    array_of_short_strings.splice(i, 1)
    i--
  }
}

console.log(array_of_short_strings)

// 12. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

let sentence = 'hello world my name is hello, is is , what a grade world, my, banana, james, cool'

function wordCounter(sentenceToCount) {
  let wordCountObj = {}
  
  // split sentence into seperate words
  let wordArray = sentenceToCount
    .replaceAll(',', '')
    .replaceAll('  ', ' ')
    .split(' ')
  console.log(wordArray)

  // initialize wordCountObj
  for (let i = 0; i < wordArray.length; i++) {
    wordCountObj[wordArray[i]] = 0
  }

  // count words
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] in wordCountObj) {
      wordCountObj[wordArray[i]] ++
    }
  }

  console.log(wordCountObj)
 
}

wordCounter(sentence)
