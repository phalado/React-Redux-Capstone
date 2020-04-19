import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="App">
    <div id="init">
      <h1 className="app-title">Welcome to the BatComputer</h1>
      <Link to="/heroesList">
        <button
          type="submit"
          className="app-button"
          data-testid="home-button"
        >
          Open subjects files
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
