import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
