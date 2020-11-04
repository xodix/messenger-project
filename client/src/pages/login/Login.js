import React from 'react';
import 'D:\\CODE\\.node\\projects\\react\\mern\\messenger project\\client\\src\\pages\\login\\style\\login.scss';

export default class Login extends React.Component {
  render() {
    return (
      <form method="POST" action="/a/login">
        <header>Log in</header>
        <label>Login:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="text" />
        <button type="submit">Log in</button>
        <button type="button">Register</button>
      </form>
    )
  }
}