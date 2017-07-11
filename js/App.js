'use strict';

import {
    Provider
} from 'react-redux';
import React from 'react';
import {
    Navigator
} from 'react-native';
import store from './Redux/Store/Store';
import AppStacks from './AppStacks';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    TabNavigator,
} from 'react-navigation';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppStacks/>
            </Provider>
        )
    }
}
