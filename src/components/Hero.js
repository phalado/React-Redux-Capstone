import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = props => {
  const { hero } = props;
  const { name, image } = hero;

  const handleClick = () => {
    // changeRender
  };

  return (
    <div className="hero-container">
      <h2 className="hero-name">{name}</h2>
      <button className="hero-button" type="button" onClick={handleClick}>
        <img src={image} alt={name} className="hero-image" />
      </button>
      {/* <ul>
        {filiation.map(value => {
          return <li key={value}>{value}</li>;
        })}
      </ul> */}
    </div>
  );
};

Hero.propTypes = {
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

export default Hero;
