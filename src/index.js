import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

/**
 * A middleware like redux-thunk should be used to solve the following
 * two issues
 * 1. When using async / await during API calls, 
 * since it doesn't return a plain js object,
 * it can't be used as the action payload. async/await will return
 * the actual request call E.g. jsonPlaceholder.get('/post')
 * 2. By the time the action is dispatched to the reducers,
 * the API call response hasn't been received 
 */

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);