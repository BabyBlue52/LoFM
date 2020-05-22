import React, { useEffect, useState } from 'react';

import fire from '../base';
import { Spinner } from './animation';

export const AuthContext = React.createContext();

export function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return (
      <>Loading...</>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};