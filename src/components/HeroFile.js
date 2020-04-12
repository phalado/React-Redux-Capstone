import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
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
      <Header />
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
                    <button
                      type="button"
                      onClick={() => clickHandler([0, value], 'heroesList')}
                    >
                      {value}
                    </button>
                  </li>
                );
              }
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
        <div id="powerstats">
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
  }).isRequired,
};

export default HeroFile;
