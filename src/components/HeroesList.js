import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Header from './Header';
import './HeroesList.css';

const HeroesList = props => {
  const { heroes, filter, chngFilter } = props;

  const handleClick = value => {
    chngFilter(value);
  };

  if (heroes.length >= 190) {
    return (
      <div>
        <Header title={filter.value[1]} />
        <div className="heroes-list">
          {heroes.map(hero => {
            if ((filter.value[0] === 0 && hero.filiation.includes(filter.value[1]))
              || (filter.value[0] === 1 && hero.alignment === filter.value[1])) {
              return (
                <div key={hero.id}>
                  <Hero hero={hero} handleClick={handleClick} />
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
    <div className="heroes-list">
      <div>
        <h1 className="fetchingH1">Fetching data</h1>
        <img src="./content/fetching.gif" alt="Fetching" className="fetch-image" />
        <h2 className="fetchingH2">Please wait</h2>
      </div>
    </div>
  );
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.array).isRequired,
  chngFilter: PropTypes.func.isRequired,
};

export default HeroesList;
