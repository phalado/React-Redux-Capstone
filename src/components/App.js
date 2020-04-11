import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import HeroesList from '../containers/HeroesList';
import TeamsList from '../containers/TeamsList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddHero = this.handleAddHero.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    console.log('appHeroes', this.props);
  }

  handleClick() {
    const { changeRender } = this.props;
    changeRender('heroesList');
    console.log(this.props);
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

    return null;
  }
}

App.propTypes = {
  addNewHero: PropTypes.func.isRequired,
  changeRender: PropTypes.func.isRequired,
  render: PropTypes.string.isRequired,
};

export default App;
