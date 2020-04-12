import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';
import './index.css';

const initialState = {
  heroes: [],
  filter: {
    value: [0, 'Justice League of America'],
    type: [
      'filiation',
      'alignment',
      'name',
    ],
    filiation: [
      'Justice League',
      'Justice League of America',
      'Green Lantern Corps',
      'Flash Family',
      'Teen Titans',
      'Injustice League',
      'Justice League Dark',
      'Legion of Doom',
      'Suicide Squad',
      'Birds of Prey',
      'Justice Society of America',
      'Batman Family',
      'Outsiders',
      'Sinestro Corps',
      'Watchmen',
      'Young Justice',
      'League of Assassins',
      'Batman Incorporated',
      'Justice League Unlimited',
      'Team Arrow',
      'Justice League International',
    ],
    alignment: [
      'good',
      'bad',
      'neutral',
    ],
  },
  render: 'init',
};

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
