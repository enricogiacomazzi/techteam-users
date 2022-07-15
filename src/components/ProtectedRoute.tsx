import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";


export const ProtectedRoute: React.FC<PropsWithChildren<any>> = ({children}) => {
    const {isLogged} = useAuthentication();
    const logged = isLogged();
    console.log('logged', logged);

    return (logged ? <>{children}</> : <Navigate to="/login"/>);
}