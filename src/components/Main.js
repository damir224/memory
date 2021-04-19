import React from 'react';
import { Provider } from 'react-redux';
import CardList from './CardList';
import store from '../store';
import NavBar from './NavBar';

export default function Main() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <CardList />
      </Provider>
    </>
  );
}
