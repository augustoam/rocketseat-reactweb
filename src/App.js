import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login';
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/index" component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
