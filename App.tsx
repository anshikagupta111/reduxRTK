
import React from 'react';
import { Provider } from 'react-redux';
import Apifront from './android/app/src/components/MyApi/apifront';
import store from './android/app/src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Apifront/>
    </Provider>
  );
};
export default App

