import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BigO from './components/BigO';
import ProblemSolvingApproach from './components/Problem/ProblemSolvingApproach';

const TITLE:{[arg:string]: string} = {
  HOME: 'Home',
  BIG_O: 'BigO',
  PROBLEM_APPROACH: 'Problem solving approach'
}

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <ul>
          <li><Link to={`/${TITLE.HOME.toLowerCase()}`}>{TITLE.HOME}</Link></li>
          <li><Link to={`/${TITLE.BIG_O.toLowerCase()}`}>{TITLE.BIG_O}</Link></li>
          <li><Link to={`/${`problemApproach`}`}>{TITLE.PROBLEM_APPROACH}</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/home">
            'home'
          </Route>
          <Route path="/bigo">
            <BigO />
          </Route>
          <Route exact path="/problemApproach">
            <ProblemSolvingApproach />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
