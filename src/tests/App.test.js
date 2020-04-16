import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
// import App from './App';
import App from './App';

it('renders correctly', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
