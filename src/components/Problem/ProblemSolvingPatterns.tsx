import React from 'react';



function ProblemSolvingPatterns(): JSX.Element {
    return (
        <div>
            <div>
                <p>Frequency counters</p>
                <hr />
                <p>
                    This pattern uses objects or sets to collect values/frequencies of values.
                    This can often avoid the need for nested loops or N(O^2) operations with arrays/strings.
                    Цей шаблон використовує об'єкти або набори для збору значень / частот значень.
                    Це часто дозволяє уникнути необхідності вкладених циклів або N (O ^ 2) операцій з масивами / рядками.
                </p>
                <p>TODO</p>
            </div>
            <div>
                <p>Anagrams</p>
                <p>Given two strings, write a function to determinate if the second string
                   is an anagram of the first 
                </p>
                <pre>
                    {
`
function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  console.log(validAnagram('anagrams', 'nagaramm'))
`
                    }
                </pre>
            </div>
            <div>
                <p>
                    Write a function, which accepts a sorted array of integers.
                    The function should find the first pair where the sum is 0.
                    Return an array that includes both values that sum to zero 
                    or undefined if a pair does not exist.
                </p>
                <p>func([-3,-2,-1,0,1,2,3]) //[-3,3]</p>
                <p>func([-2,-1,0,1,3]) //undefined</p>
                <pre>
                    {
`
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
sumZero([-4,-3,-2,-1,0,1,2,5]) // [-2, 2] or [-1, 1]
`
                    }
                </pre>
            </div>
            <div>
                <p>
                    Implement a function, which accepts a sorted array, and counts the 
                    unique values in the array. There can be negative numbers in the array,
                    but it will always be sorted.
                </p>
                <p>countUniqueValues([1,1,1,1,1,3])// 2</p>
                <p>countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])// 7</p>
                <p>countUniqueValues([])// 0</p>
                <p>countUniqueValues([-2,-1,-1,0,1])// 4</p>
                <pre>
                    {
`
function countUniqueValues(array){
    if(array.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < array.length; j++) {
        if(array[i] !== array[j]) {
          i++;
        array[i] = array[j]
      }
    }
    return i + 1
  }
`
                    }
                </pre>
            </div>
            <div>
                <p>Sliding window</p>
                <p>
                    Write a function, which accepts an array of integers an a number called <i><b>n</b></i>.
                    The function should calculate the maximum sum of <i><b>n</b></i> consecutive elements
                    in array.
                    Напишіть функцію, яка приймає масив цілих чисел і число, що називається n.
                    Функція повинна обчислити максимальну суму з n послідовних елементів
                    в масиві.
                </p>
                <pre>
                    {
`
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))//19
`
                    }
                </pre>
            </div>
            <div>
                <p>Divide & conquer</p>
            </div>
            <p>
                This pattern involves dividing a data set into smaller chunks and then
                repeating a process with a subset of data.
                This pattern can tremendously decrease time complexity.
            </p>
            <p>
                Given a <b>sorted</b> array of integers, write a function called search,
                that accepts a value and returns the index where the value passed to the 
                function is located. If thr value is not found, return -1 
            </p>
            <pre>
                {
`
function search(array, value){
	let min = 0;
  let max = array.length - 1;
  
  while(min <= max) {
  	let middle = Math.floor((min + max) / 2 );
    let currentElement = array[middle];
    if(array[middle] < value) {
    	min = middle + 1;
    } 
    else if(array[middle] > value) {
    	max = middle - 1;
    }
    else {
    	return middle + 1
    }
  }
  return -1;
}

console.log(search([1,2,3,4,5,6],1))// 3
`
                }
            </pre>
        </div>
    )
}

export default ProblemSolvingPatterns