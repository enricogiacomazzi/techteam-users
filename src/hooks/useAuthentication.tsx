import { useState } from "react";



export function useAuthentication() {
    // const [token, setToken] = useState<string>("");
    const tknKey = "token";

    const login = (username: string, password: string) => {
        console.log('login', username, password);
        //....
        const token = "ksdbflkasdbf";
        localStorage.setItem(tknKey, token);
        return true;
    }

    const logout = () => {
        localStorage.removeItem(tknKey);
    }

    const isLogged = () => !!getToken();

    const getToken = () => localStorage.getItem(tknKey);

    return {
        login,
        logout,
        getToken, 
        isLogged
    }
}