import React from 'react';



function ProblemSolvingApproach(): JSX.Element {
    function charCount(string: string): {[propertyName: string]: number} | undefined  {
        let result: {[propertyName: string]: number} = {};
        for(let char of string) {
            if(isAlphaNumeric(char)) {
                char = char.toLowerCase()
                result[char] = ++result[char] || 1
            }    
        }
        return result
    }
    
    function isAlphaNumeric(char: string) {
        let code = char.charCodeAt(0)
        if(!(code > 47 && code < 58) && // numeric (0-9)
           !(code > 64 && code < 91) && // upper alpha (A-Z)
           !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false
        }
        return true
    }
    console.log('wwwwwwww',charCount('Hello here !!!!!!!!'))
    return (
        <div id={'problem'}>
            <div>
                <p>Problem solving</p>
                <ul>
                    <li>Understand the problem</li>
                        <ol>
                            <li>
                                Can I restate the problem in my own words? <br/>
                                Чи можу я повторити проблему своїми словами?
                            </li>
                            <li>
                                What are the inputs that go into the problem? <br/>
                                Які вхідні дані входять у проблему?
                            </li>
                            <li>
                                What are the outputs that should come from the solution 
                                to the problem? <br/>
                                Які результати повинні виходити з рішення
                                до проблеми?
                            </li>
                            <li>
                                Can the outputs can be determined from the inputs?
                                In other words, do I have anough information to Solve
                                the problem? (You may not be able to answer this question
                                until you set about solving the problem That is okay; it is
                                still worth considering the question at this early stage.)
                                Чи можна визначати результати на основі входів?
                                Іншими словами, чи маю я достатньо інформації для розв’язання
                                проблема? (Можливо, ви не зможете відповісти на це запитання
                                поки ви не приступите до вирішення проблеми Це нормально; Це є
                                все ще варто розглянути питання на цьому ранньому етапі.)
                            </li>
                            <li>
                                How should I label the important pieces of data that are a
                                part of the problem?
                                Як мені позначити важливі фрагменти даних, які є
                                частиною проблеми?
                            </li>
                        </ol>
                    <li>Explore concrete examples</li>
                    <li>Break it down</li>
                    <li>
                        <p>Solve/simplify</p>
                        <ol>
                            <li>
                                Find the core difficulty in what you are trying to do
                                Знайдіть основну складність у тому, що ви намагаєтесь зробити
                            </li>
                            <li>
                                Temporarily ignore that difficulty
                                Тимчасово ігноруйте цю складність
                            </li>
                            <li>
                                Write a simplified solution
                                Напишіть спрощене рішення
                            </li>
                            <li>
                                Then incorporate that difficulty back in
                                Потім знову включіть цю складність
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Look back and refactor</p>
                        <ol>
                            <li>
                                Can you check the result?
                                Чи можете ви перевірити результат?
                            </li>
                            <li>
                                Can you derive the result differently?
                                Чи можете ви отримати результат інакше?
                            </li>
                            <li>
                                Can you understand it at a glance?
                                Чи можете ви це зрозуміти з одного погляду?
                            </li>
                            <li>
                                Can you use the result or method for some other problem?
                                Чи можете ви використовувати результат чи метод для якоїсь іншої проблеми?
                            </li>
                            <li>
                                Can you improve the performance of your solution?
                                Чи можете ви покращити ефективність свого рішення?
                            </li>
                            <li>
                                Can yoy think of other ways to refactor?
                                Чи можете ви придумати інші способи рефакторингу?
                            </li>
                            <li>
                                How have other people solved this problem?
                                Як інші люди вирішили цю проблему?  
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div>
                <p>[EXAMPLE, STEP 1-2: UNDERSTAND THE PROBLEM & EXPLORE CONCRETE EXAMPLES]</p>
                <p>Write a function whitch takes in a string and returns counsts 
                   of each character in e string
                </p>
                <ul>
                    <li>chartCount('aaaaa')</li>
                    <li>chartCount('my phone numberis: +80962249160')</li>
                    <li>chartCount('')</li>
                </ul>
            </div>
            <div>
                <p>[EXAMPLE, STEP 3: BREACK IT DOWN]</p>
                <div>
                    <pre>
                        {
`
function charCount(string: string): {[propertyName: string]: number} {
    // make object to return at end
      let result: {[propertyName: string]: number} = {};
    // loop over string, for each character ...
        for(let i = 0; i < string.length; i++) {
            let char: string = string[i].toLowerCase()
            // if the char is a number/letter AND key in object, add one to count;
            if(result[char] > 0) {
                result[char]++
            } 
            // if the char is  number/letter AND not in object, add it to object and set value to 1; 
            else {
                result[char] = 1
            }
            // if char is something else (space, period, etc.) do not do anything;
      }
      // return object at end
      return result
  }
`
                        }
                    </pre>
                </div>
            </div>
            <div>
                <p>[EXAMPLE, STEP 4: SOLVE OR SIMPLIFY]</p>
                <pre>
                        {
`
function charCount(string: string): {[propertyName: string]: number} | undefined  {
    let result: {[propertyName: string]: number} = {};
    for(let char of string) {
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1
        }    
    }
    return result
}

[OR]

function charCount(string: string): {[propertyName: string]: number} | undefined  {
    let result: {[propertyName: string]: number} = {};
    for(let char of string) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase()
            result[char] = ++result[char] || 1
        }    
    }
    return result
}

function isAlphaNumeric(char: string) {
    let code = char.charCodeAt(0)
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    }
    return true
}
`
                        }
                    </pre>
            </div>
        </div>
    )
}

export default ProblemSolvingApproach