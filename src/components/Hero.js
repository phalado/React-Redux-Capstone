import React from 'react';
import PropTypes from 'prop-types';

const Hero = props => {
  const {
    name, identity, image, chart, filiation, status
  } = props.hero;

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <img src={image} alt={name} />
      </div>
      <h2>{identity}</h2>
      <ul>
        {filiation.map(value => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Hero;
