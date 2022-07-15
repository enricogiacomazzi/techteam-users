import React from "react";
import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom";
import { getUserById } from "../../../api";


export const UsersDetail:React.FC = () => {
    const {id} = useParams();

    const {data, isError, isLoading} = useQuery(['users', id],
    () => getUserById(parseInt(id!, 10)));

    if(isError) {
        const error = encodeURIComponent(`Error returning user with id ${id}`);
        return <Navigate to={"/users?error=" + error}/>
        // return <h1>Error returning user with id {id}</h1>
    }

    if(isLoading) {
        return <i className="fa fa-spinner fa-2xl"></i>
    }

    return (<ul>
        <li>{data?.name}</li>
        <li>{data?.surname}</li>
        <li>{data?.age}</li>
        <li>{data?.email}</li>
        <ul>
            {data?.addresses.map((a, i) => <li key={i}>{a.street} ({a.zipcode}), {a.city} - {a.country}</li>)}
        </ul>
    </ul>)

}