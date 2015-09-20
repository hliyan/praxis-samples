import { React, Router, Route, IndexRoute } from 'praxis';
import Dashboard from './dashboard/Dashboard';
import Users from './users/Users';
import App from './App';

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="/users" component={Users} />
        </Route>
    </Router>
);