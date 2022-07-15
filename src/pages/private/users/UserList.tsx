import React, { useEffect } from "react";
import { getUsers } from "../../../api";


export const UsersList:React.FC = () => {
    
    useEffect(() => {
        getUsers().then(users => console.log('users', users));
    })


    return (<h1>users list</h1>);
}