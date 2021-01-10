// todo: connect to db settings popups
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// !styling
import './main.min.css'

// !pages
import Info from './pages/info/Info';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Chats from './pages/chats/Chats';
import Settings from './pages/settings/Settings';
import Chat from './pages/chat/Chat';
import p404 from './pages/404/404';

// !test
import { UserProvider } from './actions/mainContext';

function App(): JSX.Element {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Info} />
          <Route path="/about" component={Info} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chats" component={Chats} />
          <Route path="/chat/:groupId" component={Chat} />
          <Route path="/settings" component={Settings} />
          <Route path="/*" component={p404} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
