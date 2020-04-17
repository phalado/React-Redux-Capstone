import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import initialState from './initialState';

beforeEach(() => {
  delete window.location;
  window.location = new URL('http://localhost/');
});

describe('Render the page correctly', () => {
  test('Render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Open the application, click on the button e redirect to "HeroesList" page', () => {
  test('Render the application home page', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toContain('Welcome to the BatComputer');
  });

  test('Click on the button and render "HeroesList" page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).toContain('heroes-list');
    expect(container.innerHTML).toContain('Justice League of America');
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
  });

  test('Test if the heroes data is being loaded', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).toContain('Justice League of America');
    expect(container.innerHTML).toContain('<h2 class="hero-name">Superman</h2>');
    expect(container.innerHTML).toContain('<h2 class="hero-name">Wonder Woman</h2>');
    expect(container.innerHTML).toContain('<h2 class="hero-name">Batman</h2>');
  });
});

describe('Render the "HeroesList" page and click on the header`s buttons', () => {
  it('Renders the page and check the header', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).toContain('Justice League of America');
  });

  it('Tests the "About" page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('About this project'));
    expect(container.innerHTML).toContain('<h1 class="about-title">About</h1>');
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
    expect(container.innerHTML).not.toContain('Justice League of America');
  });

  it('Renders the "TeamsList" page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).toContain('<h1>Filter subject by alignment:</h1>');
    expect(container.innerHTML).toContain('<h1>Filter subject by filiation:</h1>');
    expect(container.innerHTML).toContain('<h1>Choose a subject by name:</h1>');
    expect(container.innerHTML).toContain('Superman');
    expect(container.innerHTML).toContain('Batman');
    expect(container.innerHTML).toContain('Wonder Woman');
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
  });
});

describe('Render the "TeamsList" page, click on a hero and then click on a team', () => {
  it('Renders the page and clisk on a header button to render the "TeamsList" page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).toContain('<h1>Choose a subject by name:</h1>');
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
  });

  initialState.heroes.forEach(hero => {
    it(`Clicks on ${hero.name}'s button and render the "HeroesFile" page`, () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByTestId('home-button'));
      fireEvent.click(screen.getByText('Click here to change filter'));
      expect(container.innerHTML).toContain(hero.name);
      fireEvent.click(screen.getByText(hero.name));
      expect(container.innerHTML).not.toContain('<h1>Choose a subject by name:</h1>');
      expect(container.innerHTML).toContain(hero.name);
      expect(container.innerHTML).toContain(hero.identity);
      expect(container.innerHTML).toContain(hero.alignment);
      expect(container.innerHTML).toContain(hero.filiation[0]);
    });
  });
});
