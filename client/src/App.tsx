// todo: connect to db settings popups
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// !styling
import './main.min.css'

// !provider
import { UserProvider } from './actions/mainContext';

// !pages
import Info from './pages/info/Info';
import Login from './pages/login/Login';
import Chat from './pages/chat/Chat';
import Chats from './pages/chats/Chats';
import Friends from './pages/friends/Friends';
import Spinner from './components/Spinner';

// !lazily loading less used pages
const Settings = React.lazy(() => import('./pages/settings/Settings'));
const Register = React.lazy(() => import('./pages/register/Register'));
const p404 = React.lazy(() => import('./pages/404/404'));

function App(): JSX.Element {
  return (
    <Router>
      <UserProvider>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={Info} />
            <Route path="/about" component={Info} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/chats" component={Chats} />
            <Route path="/friends" component={Friends} />
            <Route path="/chat/:groupId" component={Chat} />
            <Route path="/settings" component={Settings} />
            <Route path="/*" component={p404} />
          </Switch>
        </React.Suspense>
      </UserProvider>
    </Router>
  );
}

export default App;
