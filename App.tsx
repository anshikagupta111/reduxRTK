
import React from 'react';
import { Provider } from 'react-redux';
import { ApiFront } from './App/screens/index';
import { store } from './App/redux';
import { enableScreens } from 'react-native-screens';
import {AppNavigator} from './App/navigation/index';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};
enableScreens();
export default App

