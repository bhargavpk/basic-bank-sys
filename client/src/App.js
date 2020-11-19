import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Transfer from './pages/Transfer'
import Account from './pages/Account'
import Transfers from './pages/Transfers'

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" component={Home} exact />
          <Route path="/transfer/:id" component={Transfer} />
          <Route path="/account/:id" component={Account} />
          <Route path="/transfers" component={Transfers} />
        </Router>
    );
  }
}

export default App;
