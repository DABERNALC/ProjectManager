import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import UserInfo from "./Store/Reducers/UserInfo"
import userReducer from './Store/Reducers/UserInfo';
import projectDetailReducer from './Store/Reducers/ProjectInfo';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
/*
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
 const store = createStore(reducer, /* preloadedState, composeEnhancers(applyMiddleware(thunk)));
*/

const rootReducer = combineReducers({
  UserInfo: userReducer,
  ProjectDetail: projectDetailReducer
});

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
  <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>
  
  ,
  document.getElementById('root')
);

