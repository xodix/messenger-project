import React, { FormEvent, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../actions/mainContext';
import { ILoginRes } from './../../interfaces/ILoginRes';

export default function Login() {

  const [err, setErr] = useState<string>('');
  const user = useContext(UserContext);
  const history = useHistory();
  const fetchLogin = async (e: FormEvent) => {
    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw: string = JSON.stringify({ "email": (e.target as HTMLFormElement).email.value, "password": (e.target as HTMLFormElement).password.value });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {

      const response = await fetch("http://localhost:5000/u/login", requestOptions);

      const result: ILoginRes = await response.json();

      if (result.authenticated) {
        user.setUser({ email: result.email, userName: result.userName, jwtToken: result.token });
        history.push('/chats');
      }

      else setErr(result.err)

    } catch (err) {

      setErr("service is not available");

    }
  }

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault();
    fetchLogin(e);
  }

  return (
    <form onSubmit={handleLogin}>
      <header>Log in</header>
      <div id="err">{err}</div>
      <label>Email:</label>
      <input type="text" name="email" maxLength={100} minLength={3} />
      <label>Password:</label>
      <input type="password" name="password" maxLength={30} minLength={8} />
      <button type="submit">Log in</button>
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
    </form>
  );

}