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
  });

  test('The rendered page is the "Justice League of America" team page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).toContain('Justice League of America');
  });

  test('This is not the home page anymore', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
  });

  test('Test if the heroes data is being loaded - Superman', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).toContain('<h2 class="hero-name">Superman</h2>');
  });

  test('Test if the heroes data is being loaded - Wonder Woman', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    expect(container.innerHTML).toContain('<h2 class="hero-name">Wonder Woman</h2>');
  });

  test('Test if the heroes data is being loaded - Batman', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
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
  });

  it('The About page does not have the home page title', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('About this project'));
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
  });

  it('The about page is not a team page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('About this project'));
    expect(container.innerHTML).not.toContain('Justice League of America');
  });

  it('Renders the "TeamsList" page and check the first title', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).toContain('<h1>Filter subject by alignment:</h1>');
  });

  it('Renders the "TeamsList" page and check the second title', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).toContain('<h1>Filter subject by filiation:</h1>');
  });

  it('Renders the "TeamsList" page and check the third title', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).toContain('<h1>Choose a subject by name:</h1>');
  });

  it('Renders the "TeamsList" page and check for a heroe button', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).toContain('Superman');
  });

  it('The TeamsList page is not the home page', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('home-button'));
    fireEvent.click(screen.getByText('Click here to change filter'));
    expect(container.innerHTML).not.toContain('Welcome to the BatComputer');
  });
});

describe('Render the "TeamsList" page, click on a hero and then click on a team', () => {
  initialState.heroes.forEach(hero => {
    it(`Clicks on ${hero.name}'s button and render the "HeroesFile" page`, () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByTestId('home-button'));
      fireEvent.click(screen.getByText('Click here to change filter'));
      fireEvent.click(screen.getByText(hero.name));
      expect(container.innerHTML).not.toContain('<h1>Choose a subject by name:</h1>');
    });

    it('Check for the hero`s name', () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByTestId('home-button'));
      fireEvent.click(screen.getByText('Click here to change filter'));
      fireEvent.click(screen.getByText(hero.name));
      expect(container.innerHTML).toContain(hero.name);
    });

    it('Check for the hero`s identity', () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByTestId('home-button'));
      fireEvent.click(screen.getByText('Click here to change filter'));
      fireEvent.click(screen.getByText(hero.name));
      expect(container.innerHTML).toContain(hero.identity);
    });

    it('Check for the hero`s alignment', () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByTestId('home-button'));
      fireEvent.click(screen.getByText('Click here to change filter'));
      fireEvent.click(screen.getByText(hero.name));
      expect(container.innerHTML).toContain(hero.alignment);
    });

    it('Check for the hero`s filiation', () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByTestId('home-button'));
      fireEvent.click(screen.getByText('Click here to change filter'));
      fireEvent.click(screen.getByText(hero.name));
      expect(container.innerHTML).toContain(hero.filiation[0]);
    });
  });
});
