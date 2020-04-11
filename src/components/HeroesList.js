import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';

class HeroesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddHero = this.handleAddHero.bind(this);
    this.state = {
      heroes: [],
      // filter: '',
    };
  }

  componentDidMount() {
    fetch('https://superheroapi.com/api.php/2602016920125978/search/_')
      .then(res => res.json())
      .then(json => {
        this.setState({ heroes: json.results.filter(heroes => heroes.biography.publisher === 'DC Comics') });
      })
      .then(this.handleAddHero);
  }

  handleAddHero() {
    const { addNewHero } = this.props;
    const { heroes } = this.state;
    heroes.forEach(hero => {
      addNewHero(hero);
    });
    // console.log('appHeroes', this.props);
  }

  render() {
    const { heroes, filter } = this.props;

    if (heroes.length >= 188) {
      return (
        <div className="heroes-list">
          {heroes.map(hero => {
            if (hero.filiation.includes(filter)) {
              return (
                <Hero
                  key={hero.id}
                  hero={hero}
                />
              );
            }
            return null;
          })}
        </div>
      );
    }
    return (
      <div className="heroes-list" />
    );
  }
}

HeroesList.propTypes = {
  addNewHero: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default HeroesList;
