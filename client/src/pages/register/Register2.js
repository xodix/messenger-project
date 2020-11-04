import React from 'react';
import 'D:\\CODE\\.node\\projects\\react\\mern\\messenger project\\client\\src\\pages\\register\\style\\register.scss';

export default class Register2 extends React.Component {
  render() {
    return (
      <form method="POST" action="/a/login">
        <header>Register</header>
        <label>Password:</label>
        <input type="text" />
        <label>Repeat password:</label>
        <input type="text" />
        <button type="submit">Register</button>
        <button type="button">&lt;</button>
      </form>
    )
  }
}