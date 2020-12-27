import React from "react";

interface IUser {
  email: string,
  userName: string,
  jwtToken: string
}

interface IRegisterData {
  email: string,
  userName: string,
  password: string,
  repeatedPassword: string
}

export const RegisterContext = React.createContext<{ registerData: IRegisterData, setRegisterData: any }>({
  registerData: {
    email: '',
    userName: '',
    password: '',
    repeatedPassword: ''
  },
  setRegisterData: null
});

export const RegisterProvider = (props: JSX.ElementChildrenAttribute): JSX.Element => {
  const [registerData, setRegisterData] = React.useState<IRegisterData>({
    email: '',
    userName: '',
    password: '',
    repeatedPassword: ''
  });
  return (
    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
      {props.children}
    </RegisterContext.Provider>
  )
}

export const UserContext = React.createContext<{ user: IUser, setUser: any }>({
  user: {
    email: '',
    userName: '',
    jwtToken: ''
  },
  setUser: null
});

export const UserProvider = (props: JSX.ElementChildrenAttribute): JSX.Element => {
  const [use, setUse] = React.useState<IUser>({
    email: '',
    userName: '',
    jwtToken: ''
  });
  return (
    <UserContext.Provider value={{ user: use, setUser: setUse }}>
      {props.children}
    </UserContext.Provider>
  )
}

// ? What do I need to store in state
// JWT token
// emial
// userName