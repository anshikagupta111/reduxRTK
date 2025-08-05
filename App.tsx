
import React from 'react';
import { Provider } from 'react-redux';
import Apifront from './android/app/screens/Home/apifront';
import store from './android/app/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Apifront/>
    </Provider>
  );
};
export default App

