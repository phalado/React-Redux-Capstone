import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamsList = props => {
  const { chngFilter, filter, heroes } = props;

  const handleClick = value => {
    chngFilter(value);
  };

  return (
    <div>
      <h1>Filter subject by alignment:</h1>
      <div className="filtering">
        {filter.alignment.map(value => (
          <Link to="/heroesList" key={value}>
            <button
              key={value}
              type="button"
              className="filter-value"
              onClick={() => handleClick([1, value])}
            >
              {value}
            </button>
          </Link>
        ))}
      </div>
      <h1>Filter subject by filiation:</h1>
      <div className="filtering">
        {filter.filiation.map(value => (
          <Link to="/heroesList" key={value}>
            <button
              key={value}
              type="button"
              className="filter-value"
              onClick={() => handleClick([0, value])}
            >
              {value}
            </button>
          </Link>
        ))}
      </div>
      <h1>Choose a subject by name:</h1>
      <div className="filtering">
        {heroes.map(hero => (
          <Link to={`/herofile/${hero.id}`} key={hero.id}>
            <button
              key={hero.id}
              type="button"
              className="filter-value"
              onClick={() => handleClick([2, hero.id])}
            >
              {hero.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

TeamsList.propTypes = {
  chngFilter: PropTypes.func.isRequired,
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
