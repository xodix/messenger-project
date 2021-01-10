import React, { ChangeEvent, FormEvent } from 'react';
import { RegisterContext } from './../../actions/mainContext';
import { Link } from 'react-router-dom';

export default function Register1(props: { changePage: React.Dispatch<React.SetStateAction<0 | 1>> }): JSX.Element {
  const register = React.useContext(RegisterContext);

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    name === 'email' ? register.setRegisterData({ ...register.registerData, email: value }) : register.setRegisterData({ ...register.registerData, userName: value });
  }

  const handlePageChange = (e: FormEvent): void => {
    e.preventDefault();
    props.changePage(1);
  }

  return (
    <form onSubmit={handlePageChange}>
      <header>Register</header>
      <div id="err">{register.registerData.err}</div>
      <label>Email:</label>
      <input type="email" onChange={handleChange} maxLength={100} name="email" value={register.registerData.email} />
      <label>Username:</label>
      <input type="text" onChange={handleChange} maxLength={30} minLength={3} name="userName" value={register.registerData.userName} />
      <button type="submit">&gt;</button>
      <Link to="/login">
        <button type="button">Log in</button>
      </Link>
    </form>
  );

}
