import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Play from './pages/Play';
import Splash from './pages/Splash';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Splash}></Route>
        <Route path="/play" component={Play}></Route>
      </Switch>
    </>



    /*
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
    </div>
    */
  );
}

export default App;
