/**
 * @format
 */
import React from 'react'; // Remember to import React
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import reducer from './src/models/user/reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import getUserInfo from './src/models/user/sagas';

import {composeWithDevTools} from 'redux-devtools-extension';

import {name as appName} from './app.json';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(getUserInfo);

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
