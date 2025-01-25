import React, { createContext, useContext } from "react";

export const AuthContext = createContext({})
export const useAuth = ()=> useContext(AuthContext)


export const AuthProvider = ({ children }:{
    children:React.ReactNode
}) => {
    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}
