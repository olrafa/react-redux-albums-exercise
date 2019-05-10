import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';

export default class App extends Component {
  render(){
  
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <AlbumsListContainer />
      </header>
    </div>
    </Provider>
  );
}
}

