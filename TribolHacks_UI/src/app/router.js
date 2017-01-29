import { Route,IndexRoute, Link} from 'react-router';
import React from 'react';
import App from './App'
import DashBoardContainer from './modules/dashboard/containers/dashboard-container';

const routers =
(<Route path="/" component={App}>
    <IndexRoute component={DashBoardContainer} />
</Route>)
;

export default routers;