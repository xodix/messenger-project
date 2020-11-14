import React from 'react';
import { Link } from 'react-router-dom';

interface state {
  password: string,
  repeat: string,
  err: String
}

export default class Register2 extends React.Component {
  state: state
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      repeat: '',
      err: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleBlur() {
    if (this.state.password === this.state.repeat) {
      this.setState({
        err: ''
      });
    } else {
      this.setState({
        err: 'Both fields need to be the same'
      });
    }
  }

  render() {
    return (
      <form method="POST" action="/a/register">
        <header>Register</header>
        <div>{this.state.err}</div>
        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleChange} onBlur={this.handleBlur} maxLength={30} minLength={8} value={this.state.password} />
        <label>Repeat password:</label>
        <input type="password" name="repeat" onChange={this.handleChange} onBlur={this.handleBlur} maxLength={30} minLength={8} value={this.state.repeat} />
        <button type="submit" disabled={!!this.state.err}>Register</button>
        <Link to="/register1">
          <button type="button">&lt;</button>
        </Link>
      </form>
    )
  }
}