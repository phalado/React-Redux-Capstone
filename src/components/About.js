/* eslint-disable */
import React from 'react';
import Header from './Header';
import './About.css';

const About = () => (
  <div>
    <Header title="About" />
    <div className="about-page">
      <h1 className="about-title">About</h1>
      <p className="about-text">This page was produced by Raphael Cordeiro as a prerequisite to complete the React and Redux program in Microverse.</p>
      <p className="about-text">
        To know more about this page, consider visiting its repository:
        <a href="https://github.com/phalado/React-Redux-Capstone" target="_blank">
          https://github.com/phalado/React-Redux-Capstone
        </a>
      </p>
      <p className="about-text">Feel free to visit my social medias and send me a hello clicking on the icons below.</p>
      <div className="about-icon-container">
        <a href="https://github.com/phalado/" className="about-icon github-icon" target="_blank" />
        <a href="https://twitter.com/Phalado" className="about-icon twitter-icon" target="_blank" />
        <a href="https://www.linkedin.com/in/raphael-cordeiro/" className="about-icon linkedin-icon" target="_blank" />
      </div>
      <p className="about-text">I have no business rights about the characters used in this catalog. This is only for learning purposes. All characters belongs to DC Comics</p>
    </div>
  </div>
);

export default About;
