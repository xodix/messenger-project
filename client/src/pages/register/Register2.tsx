import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser } from '../../interfaces/IUser';
import { RegisterContext, UserContext } from './../../actions/mainContext';

export default function Register2(props: { changePage: React.Dispatch<React.SetStateAction<0 | 1>> }): JSX.Element {
  // used to redirect
  const histroy = useHistory();

  const register = useContext(RegisterContext);
  const { setUser } = useContext(UserContext);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw: string = JSON.stringify({ "email": register.registerData.email, "userName": register.registerData.userName, "password": register.registerData.password });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    try {

      const response = await fetch("http://localhost:5000/u/register", requestOptions);
      const result: IUser = await response.json();

      if (result.jwtToken) {
        setUser({ userName: result.userName, email: result.email, jwtToken: result.jwtToken });
        histroy.push('/chats');
      }

      else register.setRegisterData({ ...register.registerData, err: result });

    } catch (err) {

      register.setRegisterData({ ...register.registerData, err: "service is not aviable" });

    }
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    name === 'password' ? register.setRegisterData({ ...register.registerData, password: value }) : register.setRegisterData({ ...register.registerData, repeatedPassword: value });
  }

  const handleBlur = (): void => {
    if (register.registerData.password === register.registerData.repeatedPassword) {
      register.setRegisterData({ ...register.registerData, err: '' });
    } else {
      register.setRegisterData({ ...register.registerData, err: 'Both fields need to be the same' });
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <header>Register</header>
      <div id="err">{register.registerData.err}</div>
      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} maxLength={30} minLength={8} value={register.registerData.password} />
      <label>Repeat password:</label>
      <input type="password" name="repeat" onChange={handleChange} onBlur={handleBlur} maxLength={30} minLength={8} value={register.registerData.repeatedPassword} />
      <button type="submit" disabled={!!register.registerData.err}>Register</button>
      <button type="button" onClick={() => props.changePage(0)}>&lt;</button>
    </form>
  );

}