import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './Header';

const HeroFile = props => {
  const { heroes, filter, handleClick } = props;
  const hero = heroes.filter(hero => hero.id === filter.value[1])[0];
  const {
    name, image, identity, filiation, alignment,
  } = hero;

  const clickHandler = (value, render) => {
    handleClick(value, render);
  };

  return (
    <div>
      <Header title={name} />
      <div className="hero-file-container">
        <div className="hero-img-container">
          <img src={image} alt={name} className="hero-img" />
        </div>
        <div className="hero-data">
          <h1>{name}</h1>
          <h2>
            {`Identity:  ${identity}`}
          </h2>
          <h2>
            {`Alignment:  ${alignment}`}
          </h2>
          <h2>Filiations:</h2>
          <ul>
            {filiation.map(value => {
              if (filter.filiation.includes(value)) {
                return (
                  <li key={value}>
                    <Link to="/heroesList">
                      <button
                        type="button"
                        onClick={() => clickHandler([0, value])}
                      >
                        {value}
                      </button>
                    </Link>
                  </li>
                );
              }
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

HeroFile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    filiation: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  heroes: PropTypes.arrayOf(PropTypes.object),
};

HeroFile.defaultProps = {
  heroes: null,
};

export default HeroFile;
