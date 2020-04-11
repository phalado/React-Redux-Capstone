import React from 'react';
import PropTypes from 'prop-types';
import './TeamsList.css';

const TeamsList = props => {
  const { chngFilter, changeRender, filter } = props;

  const handleClick = value => {
    chngFilter(value);
    changeRender('heroesList');
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
            onClick={() => handleClick([1, value])}
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
            onClick={() => handleClick([0, value])}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

TeamsList.propTypes = {
  chngFilter: PropTypes.func.isRequired,
  changeRender: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    filiation: PropTypes.arrayOf(PropTypes.string),
    alignment: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default TeamsList;
