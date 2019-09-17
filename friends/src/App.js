import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//components
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Login/>
      </div>
    </Router>
  );
}

export default App;
