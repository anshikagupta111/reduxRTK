
import React from 'react';
import { Provider } from 'react-redux';
import Apifront from './App/screens/Home/apifront';
import store from './App/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Apifront/>
    </Provider>
  );
};
export default App

