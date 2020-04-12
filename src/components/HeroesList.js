import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Header from '../containers/Header';
import './HeroesList.css';

const HeroesList = props => {
  const {
    heroes, filter, chngFilter, changeRender,
  } = props;

  const handleClick = (value, render) => {
    chngFilter(value);
    changeRender(render);
  };

  if (heroes.length >= 190) {
    return (
      <div>
        <Header />
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
    <div className="heroes-list" />
  );
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.array).isRequired,
  chngFilter: PropTypes.func.isRequired,
  changeRender: PropTypes.func.isRequired,
};

export default HeroesList;
