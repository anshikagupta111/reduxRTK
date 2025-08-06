
import React from 'react';
import { Provider } from 'react-redux';
import { ApiFront } from './App/screens/index';
import { store } from './App/redux';
const App = () => {
  return (
    <Provider store={store}>
      <ApiFront/>
    </Provider>
  );
};
export default App

