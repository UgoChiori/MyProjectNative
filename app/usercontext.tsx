import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  user: {
    email: '',
    password: '',
    name: ''
  },
  setUser: (user: { email: string; password: string; name: string }) => {}
});

import { ReactNode } from 'react';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name:''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};