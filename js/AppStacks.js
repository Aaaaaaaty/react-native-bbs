'use strict';

// import { Provider } from 'react-redux';
// import React from 'react';
// import { Navigator } from 'react-native';
// import store from './Redux/Store/Store';
// import FilmGoodsList from './Container/FilmGoodsList';
// import FilmCinemaList from './Container/FilmCinemaList';
// import FilmListDetail from './Container/FilmListDetail';
import FilmMe from './Container/FilmMe';
// import FilmGoodsListShow from './Container/FilmGoodsListShow';
import FilmTab from './Container/FilmTab';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

const AppStacks = StackNavigator({
  // FilmListDetail: {
  // 	screen: FilmListDetail
  // },
  FilmMe: {
    screen: FilmMe
  },
  FilmTab: {
    screen: FilmTab
  },
}, {
  headerMode: 'none'
})

export default AppStacks
