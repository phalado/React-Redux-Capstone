/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import './About.css';

const About = () => (
  <div>
    <Header />
    <div className="about-page">
      <h1 className="about-title">About</h1>
      <p className="about-text">This page was produced by Raphael Cordeiro as prerequisite to complete React and Reduz program in Microverse.</p>
      <p className="about-text">
        To know more about this page consider visit its repository:
        <a href="https://github.com/phalado/React-Redux-Capstone" target="_blank">
          https://github.com/phalado/React-Redux-Capstone
        </a>
      </p>
      <p className="about-text">Feel free to visit my social medias and send me a hello clicking on the icons bellow.</p>
      <div className="about-icon-container">
        <a href="https://github.com/phalado/" className="about-icon github-icon" target="_blank" />
        <a href="https://twitter.com/Phalado" className="about-icon twitter-icon" target="_blank" />
        <a href="https://www.linkedin.com/in/raphael-cordeiro/" className="about-icon linkedin-icon" target="_blank" />
      </div>
      <p className="about-text">I have no business rights about the characters used in this catalogue. This is only for learning purposes. All character belongs to DC Comics</p>
    </div>
  </div>
);

export default About;
