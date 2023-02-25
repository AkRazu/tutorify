import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase";
export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => unsubscribe();
  });
  const info = {
    loading,
    user
  };
  return <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>;
};

export default AuthContext;
