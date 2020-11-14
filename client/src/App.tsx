import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// !styling
import './main.scss'

// !pages
// import Info from './pages/info/Info';
// import Login from './pages/login/Login';
// import Register1 from './pages/register/Register1';
// import Register2 from './pages/register/Register2';
// import Chats from './pages/chats/Chats';
// import Settings from './pages/settings/Settings';
// import Chat from './pages/chat/Chat';
// import p404 from './pages/404/404';

// !test
import Render from './pages/renders/';

function App() {
  return (
    <Render />
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Info} />
    //     <Route path="/about" component={Info} />
    //     <Route path="/login" component={Login} />
    //     <Route path="/register1" component={Register1} />
    //     <Route path="/register2" component={Register2} />
    //     <Route path="/chats" component={Chats} />
    //     <Route path="/settings" component={Settings} />
    //     <Route path="/chat" component={Chat} />
    //     <Route path="/*" component={p404} />
    //   </Switch>
    // </Router>
  );
}

export default App;
