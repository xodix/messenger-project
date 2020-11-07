import React from 'react';
import './style/login.scss';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <form method="POST" action="/a/login">
        <header>Log in</header>
        <label>Login:</label>
        <input type="text" name="userName" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">Log in</button>
        <Link to="/register1">
          <button type="button">Register</button>
        </Link>
      </form>
    )
  }
}