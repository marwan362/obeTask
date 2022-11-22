import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from './src/navigation';

import reducers from './src/redux/reducers';
const App = () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
