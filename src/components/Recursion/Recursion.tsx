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
                <p>Literal Iterativity ss</p>
            </div>
        </div>
    );
}

export default Recursion;
