import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Header from '../containers/Header';
import './HeroesList.css';

const HeroesList = props => {
  const { heroes, filter } = props;

  if (heroes.length >= 189) {
    console.log(heroes, filter);
    return (
      <div>
        <Header />
        <div className="heroes-list">
          {heroes.map(hero => {
            if (hero.filiation.includes(filter.value[1])) {
              return (
                <div>
                  <Hero
                    key={hero.id}
                    hero={hero}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="heroes-list" />
  );
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default HeroesList;
