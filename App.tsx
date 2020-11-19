import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ReduxThunk from 'redux-thunk';
import Main from './src/Main';
import CombineReducer, { initialState } from './src/reducers/CombineReducer';

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={createStore(CombineReducer, initialState, applyMiddleware(ReduxThunk))}>
          <Main />
      </ReduxProvider>
    );
  }
}