import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import HeroesList from '../containers/HeroesList';
import HeroFile from './HeroFile';
import TeamsList from '../containers/TeamsList';
import Home from './Home';
import About from './About';
import './App.css';

const App = props => {
  const [heros, setHeros] = useState();
  const {
    chngFilter, heroes, filter, addNewHero,
  } = props;

  const handleAddHero = () => {
    if (heros) {
      heros.heroes.forEach(value => {
        addNewHero(value);
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const loadHeroes = async () => {
      const response = await axios.get('https://superheroapi.com/api.php/2602016920125978/search/_');

      if (mounted) {
        setHeros({
          heroes: response.data.results.filter(heroes => heroes.biography.publisher === 'DC Comics'
            || heroes.biography.publisher === 'Superman Prime One-Million'
            || heroes.biography.publisher === 'Black Racer'),
        });

        handleAddHero();
      }
    };

    loadHeroes();

    return () => {
      mounted = false;
    };
  }, heros);

  const clickHandler = value => {
    chngFilter(value);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/heroesList">
            <HeroesList />
          </Route>
          <Route path="/teamsList">
            <TeamsList />
          </Route>
          <Route path="/heroFile/:id">
            <HeroFile
              hero={heroes.filter(hero => hero.id === filter.value[1])[0]}
              filter={filter}
              handleClick={clickHandler}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  addNewHero: PropTypes.func.isRequired,
  chngFilter: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  }).isRequired,
};

export default App;
