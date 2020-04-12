import React from 'react';
import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const HeroRadar = props => {
  const { chart, size } = props;

  const data = [
    {
      data: {
        INT: chart.intelligence / 100,
        STR: chart.strength / 100,
        SPD: chart.speed / 100,
        DUR: chart.durability / 100,
        POW: chart.power / 100,
        CBT: chart.combat / 100,
      },
      meta: { color: 'blue' },
    },
  ];

  const captions = {
    INT: 'Intelligence',
    STR: 'Strength',
    SPD: 'Speed',
    DUR: 'Durability',
    POW: 'Power',
    CBT: 'Combat',
  };

  return (
    <RadarChart
      captions={captions}
      data={data}
      size={size}
    />
  );
};

HeroRadar.propTypes = {
  size: PropTypes.number.isRequired,
  chart: PropTypes.shape({
    intelligence: PropTypes.number,
    strength: PropTypes.number,
    speed: PropTypes.number,
    durability: PropTypes.number,
    power: PropTypes.number,
    combat: PropTypes.number,
  }).isRequired,
};

export default HeroRadar;
