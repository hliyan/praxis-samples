import  { React, Router, Dispatcher }  from 'praxis';

// components
import App from './app/App';
import Dashboard from './dashboard/Dashboard';
import NoteIndex from './notes/NoteIndex';

// stores
import NoteStore from './notes/NoteStore';

let routes = [{ 
    path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [{
        path: 'notes',
        component: NoteIndex
    }]
}];

Dispatcher.register('notes', new NoteStore());

React.render(<Router routes={routes} />, document.getElementById('app'));