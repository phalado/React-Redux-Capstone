import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => {
  const { filter, changeRender } = props;

  const handleClick = () => {
    changeRender('teamsList');
  };

  return (
    <header className="header">
      <h1 className="header-title">{filter.value[1]}</h1>
      <button type="button" className="header-button" onClick={handleClick}>Click here to change filter</button>
    </header>
  );
};

Header.propTypes = {
  changeRender: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  }).isRequired,
};

export default Header;
