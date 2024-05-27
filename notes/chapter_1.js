const heyo = 'heyo'
let sentence = 'hello world'
sentence = 'oops'

let test = 1;
if (test) {
  console.log('happy')
} else {
  console.log('sad')
}

true && false

let friends = {
  james: 'is super cool',
  lucy: 'isn\'t cool',
  brainCellsShared: 0
}

let exampleArray = [0,1,2,3,4,5]

function doStuff(value, value2) {
  console.log('new function here')
  // console.log(console) console is just an object

  return value + value2
}

console.log(doStuff(10, 5))

let doStuffVariable = doStuff

doStuffVariable(4, 2) // hmm

function checkEquality(val1, val2) {
  console.log(val1 === val2)
}

checkEquality(2, 2)
checkEquality('5', 5)
checkEquality(3, 10)

let array1 = [1,4,5,62,737,34,23,123,6,2,6]

let i = 0;
let length = array1.length

while( i < length ) {
  console.log(array1[i])
  i++
}

for (let j = 0; j < length; j++) {
  console.log(array1[j])
}

function addStrings(str1, str2='default') {
  if (!str1 || !str2) {
    console.log('missing an input')
    return
  }

  let concatString = str1 + ' ' + str2
  console.log(concatString)

  return concatString
}

addStrings('hello', 'mom')
addStrings('hello')

let newString = addStrings('not the')
console.log(newString)