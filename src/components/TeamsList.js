import React from 'react';
import PropTypes from 'prop-types';
import './TeamsList.css';

const TeamsList = props => {
  const {
    chngFilter, changeRender, filter, heroes,
  } = props;

  const handleClick = (value, render) => {
    chngFilter(value);
    changeRender(render);
  };

  return (
    <div>
      <h1>Filter subject by alignment:</h1>
      <div className="filtering">
        {filter.alignment.map(value => (
          <button
            key={value}
            type="button"
            className="filter-value"
            onClick={() => handleClick([1, value], 'heroesList')}
          >
            {value}
          </button>
        ))}
      </div>
      <h1>Filter subject by filiation:</h1>
      <div className="filtering">
        {filter.filiation.map(value => (
          <button
            key={value}
            type="button"
            className="filter-value"
            onClick={() => handleClick([0, value], 'heroesList')}
          >
            {value}
          </button>
        ))}
      </div>
      <h1>Choose a subject by name:</h1>
      <div className="filtering">
        {heroes.map(hero => (
          <button
            key={hero.id}
            type="button"
            className="filter-value"
            onClick={() => handleClick([2, hero.id], 'heroFile')}
          >
            {hero.name}
          </button>
        ))}
      </div>
    </div>
  );
};

TeamsList.propTypes = {
  chngFilter: PropTypes.func.isRequired,
  changeRender: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    filiation: PropTypes.arrayOf(PropTypes.string),
    alignment: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default TeamsList;
