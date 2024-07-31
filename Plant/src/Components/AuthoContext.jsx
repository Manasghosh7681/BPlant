import { createContext, useState } from "react";


const AuthoContext = createContext();

const AuthoProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthoContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthoContext.Provider>
  );
};

export { AuthoProvider, AuthoContext };
