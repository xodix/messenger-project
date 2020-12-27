import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const [err, setErr] = useState<string>('');

  const handleLogin = (e): void => {
    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw: string = JSON.stringify({ "email": e.email.value, "password": e.password.value });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("localhost:5000/u/login", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result), (err: string) => setErr(err));
  }

  return (
    <form onSubmit={handleLogin}>
      <div id="err">{err}</div>
      <header>Log in</header>
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