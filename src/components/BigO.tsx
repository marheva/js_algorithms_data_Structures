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
          <li> Arithmetics operations are constant</li>
        </ul>
      </div>
    </div>
  );
}

export default BigO;