import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import HeroFile from './HeroFile';
import TeamsList from './TeamsList';
import HeroesList from './HeroesList';
import initialState from './initialState';

const App = () => {
  const { heroes, filter } = initialState;

  const clickHandler = value => {
    filter.value = value;
  };

  return (
    <Router>
      <div className="App" data-testid="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/heroesList">
            <HeroesList
              heroes={heroes}
              filter={filter}
              chngFilter={clickHandler}
            />
          </Route>
          <Route path="/teamsList">
            <TeamsList
              heroes={heroes}
              filter={filter}
              chngFilter={clickHandler}
            />
          </Route>
          <Route path="/heroFile/:id">
            <HeroFile
              heroes={heroes}
              filter={filter}
              handleClick={clickHandler}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <div>No match</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
