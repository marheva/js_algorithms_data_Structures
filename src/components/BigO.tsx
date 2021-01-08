import React from 'react';

function BigO() {
    function addUpTo(num: number) {
        let total = 0;
        for(let i = 1; i <= num; i++) {
            total += i
        }
        return total
    }
  console.log(addUpTo(6))
  return (
    <div className="BigO">
      <p>Calculate the sum of all numbers from 1 up to some number <i>n</i></p>
      <div>
        <pre>
        {
`
[O(n)]

function addUpTo(num: number) {
  let total = 0;
  for(let i = 1; i <= num; i ++) {
    total += i
  }
  return total
}
`
        }
        </pre>
      </div>
      <div>
        <pre>
        {
`
[O(1)]

function addUpTo(num: number) {
  return num * (num + 1) / 2;
}
`
        }
        </pre>
      </div>
      <div>
        <pre>
        {
`
[O(n^2)]

function addUpTo(num: number) {
  for(let i = 1; i <= num; i ++) {
    for(let j = 1; j <= num; j ++) {
      console.log(i, j)
    }
  }
}
`
        }
        </pre>
      </div>
      <div>
        <ul>
          <li>Arithmetics operations are constant</li>
          <li>Variable assigment is constant</li>
          <li>Accessing elements in array (by index) or object
              (by key) is constant
          </li>
          <li>
            In a loop, the complexity is the length of the loop
            times the complexity of whatever happens inside of thr loop
          </li>
        </ul>
      </div>
      <div>
        <p>Objects:</p>
        <ul>
          <li>Inversion <b>O(1)</b></li>
          <li>Removal <b>O(1)</b></li>
          <li>Searching <b>O(n)</b></li>
          <li>Access <b>O(1)</b></li>
          <hr/>
          <li>Object.keys <b>O(n)</b></li>
          <li>Object.values <b>O(n)</b></li>
          <li>Object.entries <b>O(n)</b></li>
          <li>hasOwnPropertiae <b>O(1)</b></li>
        </ul>
      </div>
      <div>
        <p>When to use arrays</p>
        <ul>
          <li>when you need order;</li>
          <li>when you need fast access/insertion and removal (sort of)</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default BigO; 