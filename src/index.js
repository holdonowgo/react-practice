import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddlware from 'redux-promise-middleware';
import rootReducer from './reducers';

const store = createStore (
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENTION__ &&
  window.__REDUX_DEVTOOLS_EXTENTION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

if(module.hot) {
  module.hot.accept();
}
