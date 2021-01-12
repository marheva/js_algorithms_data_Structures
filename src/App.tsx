import React from 'react';

import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import BigO from './components/BigO';
// import ProblemSolvingApproach from './components/Problem/ProblemSolvingApproach';
// import ProblemSolvingPatterns from './components/Problem/ProblemSolvingPatterns';
// import Recursion from './components/Recursion/Recursion';

// const TITLE: { [arg: string]: string } = {
//     HOME: 'Home',
//     BIG_O: 'BigO',
//     PROBLEM_APPROACH: 'Problem solving approach',
//     PROBLEM_PATTERNS: 'Problem solving patterns',
//     RECURSION: 'Recursion',
// };

function App() {
    return (
        <div className='App'>
            {/* <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={`/${TITLE.HOME.toLowerCase()}`}>
                                {TITLE.HOME}
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${TITLE.BIG_O.toLowerCase()}`}>
                                {TITLE.BIG_O}
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${`problemApproach`}`}>
                                {TITLE.PROBLEM_APPROACH}
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${`problemPatterns`}`}>
                                {TITLE.PROBLEM_PATTERNS}
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${`recursion`}`}>
                                {TITLE.RECURSION}
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path='/home'>
                            'home'
                        </Route>
                        <Route path='/bigo'>
                            <BigO />
                        </Route>
                        <Route exact path='/problemApproach'>
                            <ProblemSolvingApproach />
                        </Route>
                        <Route exact path='/problemPatterns'>
                            <ProblemSolvingPatterns />
                        </Route>
                        <Route exact path='/recursion'>
                            <Recursion />
                        </Route>
                    </Switch>
                </div>
            </Router> */}
        </div>
    );
}

export default App;
