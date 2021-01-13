import React from 'react';

function Recursion(): JSX.Element {
    return (
        <div>
            <div>
                <p>Recursion is everywhere!</p>
                <ul>
                    <li>JSON.parse/JSON.strigify</li>
                    <li>
                        document.getElementById and DOM traversal algorithms
                    </li>
                    <li>Object traversial</li>
                    <li>We will see it with more complex data structures</li>
                    <li>It is sometimes a cleaner alternative to iteration</li>
                </ul>
            </div>
            <div>
                <pre>
                    {`
function sumRange(num){
    if(num === 1) return 1;
    return num + (sumRange(num - 1));
}

console.log(sumRange(3)) //6

[PROCESS]

sumRange(3)
    retrun 3 + sumRange(2)
        retrun 2 + sumRange(1)
                   
`}
                </pre>
            </div>
            <div>
                <p>Literal Iterativity</p>
                <p>
                    <b>10!</b> {`=> 10*9*8*7*6*5*4*3*2*1`}
                </p>
                <pre>
                    {`
[FACTORIAL FUNCTION]

function fuctorial(num: number): number {
    let total = 1;

    for (let i = num; i > 0; i--) {
        total *= i;
    }

    return total;
}

console.log(fuctorial(3)); // 6

[FACTORIAL RECURSION]

function factorial(num) {
    if(num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(3))// 6
`}
                </pre>
            </div>
            <div>
                <p>Helper method recursion</p>
                <pre>
                    {`
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
`}
                </pre>
            </div>
        </div>
    );
}

export default Recursion;
