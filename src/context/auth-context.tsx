import React, { ReactNode, useState } from "react";
import * as auth from "../request/api";

export const AuthContext = React.createContext<{
  user: User | null,
  login: (form: User) => Promise<void>,
  a:string
} | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export interface User {
  userName: string,
  password: string
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: User) => auth.Login(form).then(setUser);
  const a:string = '12'
  return <AuthContext.Provider children={children} value={{ user, login ,a }}/>
};
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须用在AuthProvide");
  }
  return context;
};