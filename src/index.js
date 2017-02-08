import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from './store/createStore'
import './index.css';

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
