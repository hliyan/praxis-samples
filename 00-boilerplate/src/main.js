import  { React, Router }  from 'praxis';

import App from './app/App';

let routes = [{ 
    path: '/',
    component: App/*,
    indexRoute: { component: Dashboard },
    childRoutes: [{
        path: 'users',
        component: Users
    }]*/
}];

React.render(<Router routes={routes} />, document.getElementById('app'));