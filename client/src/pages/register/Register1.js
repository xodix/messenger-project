import React from 'react';
import 'D:\\CODE\\.node\\projects\\react\\mern\\messenger project\\client\\src\\pages\\register\\style\\register.scss';

export default class Register1 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      userName: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form method="POST" action="/a/login">
        <header>Register</header>
        <label>Email:</label>
        <input type="text" onChange={this.handleChange} max="100" name="email" />
        <label>Username:</label>
        <input type="text" onChange={this.handleChange} max="30" name="userName" />
        <button type="submit">&gt;</button>
        <button type="button">Log in</button>
      </form>
    )
  }
}