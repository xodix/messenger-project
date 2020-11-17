import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = props => {
  const [user, setUser] = useState([
    {
      id: "15g5d5ds65d5ds45g",
      email: "igi migi@eu.com"
    },
    {
      id: "15g5d5ds65d5ds45g",
      email: "igi migi@eu.com"
    },
    {
      id: "15g5d5ds65d5ds45g",
      email: "igi migi@eu.com"
    }
  ]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.childern}
    </UserContext.Provider>
  )
}