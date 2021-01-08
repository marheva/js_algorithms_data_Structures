import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BigO from './components/BigO';

const TITLE:{[arg:string]: string} = {
  HOME: 'Home',
  BIG_O: 'BigO',
}

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <ul>
          {Object.keys(TITLE).map((element) => {
            return (
              <li key={element}><Link to={`/${TITLE[element].toLowerCase()}`}>{TITLE[element]}</Link></li>
            )
          })}
        </ul>

        <hr />
        <Switch>
          <Route exact path="/home">
            'home'
          </Route>
          <Route path="/bigo">
            <BigO />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
