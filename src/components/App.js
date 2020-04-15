import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import HeroesList from '../containers/HeroesList';
import HeroFile from './HeroFile';
import TeamsList from '../containers/TeamsList';
import Home from './Home';
import About from './About';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddHero = this.handleAddHero.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      heroes: [],
    };
  }

  componentDidMount() {
    fetch('https://superheroapi.com/api.php/2602016920125978/search/_')
      .then(res => res.json())
      .then(json => {
        this.setState({
          heroes: json.results.filter(heroes => heroes.biography.publisher === 'DC Comics'
            || heroes.biography.publisher === 'Superman Prime One-Million'
            || heroes.biography.publisher === 'Black Racer'),
        });
      })
      .then(this.handleAddHero);
  }

  handleAddHero() {
    const { addNewHero } = this.props;
    const { heroes } = this.state;
    heroes.forEach(hero => {
      addNewHero(hero);
    });
  }

  clickHandler(value) {
    const { chngFilter } = this.props;
    chngFilter(value);
  }

  render() {
    const { heroes, filter } = this.props;
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
                handleClick={this.clickHandler}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

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
