import React from 'react'; 
import Navbar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <NavBar/>
    </Router>
  );
}

export default App;
