import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './Header';
import HeroRadar from './HeroRadar';
import './HeroFile.css';

const HeroFile = props => {
  const { hero, filter, handleClick } = props;
  const {
    name, image, identity, chart, filiation, alignment,
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
        <div id="powerstats" className="hero-chart">
          <HeroRadar
            chart={chart}
            size={400}
          />
        </div>
      </div>
    </div>
  );
};

HeroFile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    filiation: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  hero: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    identity: PropTypes.string,
    image: PropTypes.string,
    chart: PropTypes.objectOf(PropTypes.string),
    filiation: PropTypes.arrayOf(PropTypes.string),
    alignment: PropTypes.string,
  }),
};

HeroFile.defaultProps = {
  hero: null,
};

export default HeroFile;
