import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import HeroesList from '../containers/HeroesList';
import HeroFile from './HeroFile';
// eslint-disable-next-line import/extensions
import TeamsList from '../containers/TeamsList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddHero = this.handleAddHero.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const { changeRender } = this.props;
    changeRender('heroesList');
  }

  clickHandler(value, render) {
    const { chngFilter, changeRender } = this.props;
    chngFilter(value);
    changeRender(render);
  }

  render() {
    const { render } = this.props;

    if (render === 'init') {
      return (
        <div className="App">
          <div id="init">
            <h1 className="app-title">Welcome to the BatComputer</h1>
            <button
              type="submit"
              onClick={this.handleClick}
              className="app-button"
            >
              Open subjects files
            </button>
          </div>
        </div>
      );
    }

    if (render === 'heroesList') {
      return (
        <div className="App">
          <HeroesList />
        </div>
      );
    }

    if (render === 'teamsList') {
      return (
        <div className="App">
          <TeamsList />
        </div>
      );
    }

    if (render === 'heroFile') {
      const { heroes, filter } = this.props;
      return (
        <div className="App">
          <HeroFile
            hero={heroes.filter(hero => hero.id === filter.value[1])[0]}
            filter={filter}
            handleClick={this.clickHandler}
          />
        </div>
      );
    }

    return null;
  }
}

App.propTypes = {
  addNewHero: PropTypes.func.isRequired,
  changeRender: PropTypes.func.isRequired,
  chngFilter: PropTypes.func.isRequired,
  render: PropTypes.string.isRequired,
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  }).isRequired,
};

export default App;
