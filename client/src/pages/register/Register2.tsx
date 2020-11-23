import React from 'react';
import { Link } from 'react-router-dom';

export default function Register2(): JSX.Element {
  const [password, setPassword] = React.useState<string>('');
  const [repeat, setRepeat] = React.useState<string>('');
  const [err, setErr] = React.useState<string>('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'password' ? setPassword(value) : setRepeat(value);
  }

  const handleBlur = (): void => {
    if (password === repeat) {
      setErr('');
    } else {
        setErr('Both fields need to be the same');
    }
  }


  return (
    <form method="POST" action="/a/register">
      <header>Register</header>
      <div>{err}</div>
      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} maxLength={30} minLength={8} value={password} />
      <label>Repeat password:</label>
      <input type="password" name="repeat" onChange={handleChange} onBlur={handleBlur} maxLength={30} minLength={8} value={repeat} />
      <button type="submit" disabled={!!err}>Register</button>
      <Link to="/register1">
        <button type="button">&lt;</button>
      </Link>
    </form>
  )
}