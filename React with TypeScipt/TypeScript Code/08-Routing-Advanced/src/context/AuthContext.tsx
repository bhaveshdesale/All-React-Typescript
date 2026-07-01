import { createContext, useState } from "react";
import { type AuthContextType } from "../types/auth";

interface AuthContextProviderProps{
  children:React.ReactNode
}

export const AuthContext=createContext<AuthContextType| undefined>(undefined);

export const AuthContextProvider=({children}:AuthContextProviderProps)=>{
  const [isLoggedIn, setIsLoggedIn]=useState(false);

   const login=()=>{
    setIsLoggedIn(true); }

    const logout=()=>{
      setIsLoggedIn(false);
    }

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
       {children}
    </AuthContext.Provider>
  )
}