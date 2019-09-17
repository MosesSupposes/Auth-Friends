import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//components
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login.jsx'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
