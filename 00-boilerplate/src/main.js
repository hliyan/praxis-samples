import  { React, Router }  from 'praxis';

import App from './app/App';
import Dashboard from './dashboard/Dashboard';

let routes = [{ 
    path: '/',
    component: App,
    indexRoute: { component: Dashboard }
}];

React.render(<Router routes={routes} />, document.getElementById('app'));