import React, { FormEvent, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { RegisterContext, UserContext } from './../../actions/mainContext';

export default function Register2(props: { changePage: React.Dispatch<React.SetStateAction<0 | 1>> }): JSX.Element {
  const [err, setErr] = React.useState<string>('  ');

  // used to redirect
  // const histroy = useHistory();

  const register = useContext(RegisterContext);
  const user = useContext(UserContext);

  const handleRegister = (e: FormEvent): void => {
    e.preventDefault();

    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw: string = JSON.stringify({ "email": register.registerData.email, "userName": register.registerData.userName, "password": register.registerData.password });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch("http://localhost:5000/u/register", requestOptions)
      .then(response => response.json())
      .then((result): void => user.setUser({ userName: result.userName, email: result.email, id: result._id }), (err) => setErr(err))
    // .then((): void => {
    //   histroy.push('/chats');
    // });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'password' ? register.setRegisterData({ ...register.registerData, password: value }) : register.setRegisterData({ ...register.registerData, repeatedPassword: value });
  }

  const handleBlur = (): void => {
    if (register.registerData.password === register.registerData.repeatedPassword) {
      setErr('');
    } else {
      setErr('Both fields need to be the same');
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <header>Register</header>
      <div id="err">{err}</div>
      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} maxLength={30} minLength={8} value={register.registerData.password} />
      <label>Repeat password:</label>
      <input type="password" name="repeat" onChange={handleChange} onBlur={handleBlur} maxLength={30} minLength={8} value={register.registerData.repeatedPassword} />
      <button type="submit" disabled={!!err}>Register</button>
      <button type="button" onClick={() => props.changePage(0)}>&lt;</button>
    </form>
  );

}