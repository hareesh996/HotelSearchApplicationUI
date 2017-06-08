// initial page loaded by the webpack server

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,useRouterHistory} from 'react-router';

import store from 'store';
import routers from 'router';
import {setup} from 'actions/action-creators';
import {createHistory} from 'history';//Router configuration.
require("bootstrap-loader");
require("../../static/stylesheets/main.scss");

// initialize the state.
store.dispatch(setup());

const appHistory = useRouterHistory(createHistory)({
  basename: '/hotel-search'
})

ReactDOM.render(
    <Provider store={store} >
        <Router history={appHistory}>{routers}</Router>
    </Provider>, document.getElementById('app')
);