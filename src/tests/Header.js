import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { title } = props;

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <Link to="/teamsList">
        <button
          type="button"
          className="header-button"
        >
          Click here to change filter
        </button>
      </Link>
      <Link to="/about">
        <button
          type="button"
          className="header-button"
        >
          About this project
        </button>
      </Link>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
