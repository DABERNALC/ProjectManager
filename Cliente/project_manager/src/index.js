import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import UserInfo from "./Store/Reducers/UserInfo"
import reducer from './Store/Reducers/UserInfo';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
/*
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
 const store = createStore(reducer, /* preloadedState, composeEnhancers(applyMiddleware(thunk)));
*/

const rootReducer = combineReducers({
  UserInfo: reducer,
});


const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

