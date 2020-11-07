import React from 'react';
import './style/register.scss';
import { Link } from 'react-router-dom';

interface state {
  email: string,
  userName: string,
  err: string
}

export default class Register1 extends React.Component {
  state: state;
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      err: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e): void {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleBlur(e): void {
    const { value } = e.target;
    if (!value.search(/\w+@\w+\.\w+/g)) {
      this.setState({
        err: ''
      });
    } else {
      this.setState({
        err: 'Wrong email format'
      })
    }
  }

  render() {
    return (
      <form method="POST" action="/u/login">
        <header>Register</header>
        <div id="err">{this.state.err}</div>
        <label>Email:</label>
        <input type="email" onChange={this.handleChange} onBlur={this.handleBlur} maxLength={100} name="email" />
        <label>Username:</label>
        <input type="text" onChange={this.handleChange} maxLength={30} minLength={3} name="userName" />
        <Link to="/register2">
          <button type="submit">&gt;</button>
        </Link>
        <Link to="/login">
          <button type="button">Log in</button>
        </Link>
      </form>
    )
  }
}
