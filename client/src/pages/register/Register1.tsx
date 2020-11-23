import React from 'react';
import { Link } from 'react-router-dom';

export default function Register1() {
  const [email, setEmail] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');
  const [err, setErr] = React.useState<string>('');

  const handleChange = (e): void => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setUserName(value);
  }

  const handleBlur = (e): void => {
    const { value } = e.target;
    if (!value.search(/(\w|\.)+@(\w|\.)+/g)) {
      setErr('');
    } else {
      setErr('Wrong email format');
    }
  }

  return (
    <form method="POST" action="/u/login">
      <header>Register</header>
      <div id="err">{err}</div>
      <label>Email:</label>
      <input type="email" onChange={handleChange} onBlur={handleBlur} maxLength={100} name="email" value={email} />
      <label>Username:</label>
      <input type="text" onChange={handleChange} maxLength={30} minLength={3} name="userName" value={userName} />
      <Link to="/register2">
        <button type="submit">&gt;</button>
      </Link>
      <Link to="/login">
        <button type="button">Log in</button>
      </Link>
    </form>
  )
}
