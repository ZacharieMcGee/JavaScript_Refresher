// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

let start, end

// method 1 -> bad practice
function badFunc(str) {
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i]
    let count = 0
    for (let j = 0; j < str.length; j++) {
      if (str[j] == currentLetter) {
        count++
      } 

      if (count > 1) {
        return false
      } 
    }
    count = 0
  }
  return true
}

calcPerformance(badFunc, string_1)
calcPerformance(badFunc, string_2)
calcPerformance(badFunc, string_3)

// method 2 - best practice

function isUnique(str) {
  let charObj = {}

  for (let i = 0; i<str.length; i++) {
    let currentChar = str[i]
    if (currentChar in charObj) {
      return false
    } else {
      charObj[currentChar] = 1 
    }
  }

  return true
}

function calcPerformance(func, str) {
  let start = performance.now();
  let funcReturn = func(str)
  let end = performance.now();
  let executionTime = end - start
  console.log(funcReturn, ' : ', executionTime, 'ms')
}

calcPerformance(isUnique, string_1)
calcPerformance(isUnique, string_2)
calcPerformance(isUnique, string_3)

// console.log('Method 2: ', isUnique(string_1), isUnique(string_2), isUnique(string_3))

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

let arr_1 = [2, 4, 6]
let arr_2 = [1, 3, 5]

function mergeAndSort(arr1, arr2) {
  let newArr = [...arr1, ...arr2].sort((a, b) => a - b)
  return newArr
}

console.log(mergeAndSort(arr_1, arr_2))

// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.

let dummy_arr = [1, 2, 3, 5, 6, 2345, 43, 12, 412, 341, 234, 1, 2, 3, 4, 5]

// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 


// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
