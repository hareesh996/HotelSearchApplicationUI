// initial page loaded by the webpack server.

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,hashHistory} from 'react-router';

import store from './store';
import {setup} from './actions/action-creators';
import routers from './router'
import {createHistory, useBasename} from 'history';//Router configuration.

require("bootstrap-loader");
require("../../static/stylesheets/main.scss");

// initialize the state.
store.dispatch(setup());

const history = useBasename(createHistory)({
  basename: '/hotelsearch'
})

ReactDOM.render(
    <Provider store={store} >
        <Router history={hashHistory}>{routers}</Router>
    </Provider>,document.getElementById('app')
);

