import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUsers } from "../../../../api";
import { User } from "../../../../models/user.model";
import { UserListHeader } from "./components/UserListHeader";
import { UserListRow } from "./components/UserListRow";


export const UsersList:React.FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams()
    const {data, isError, isLoading} = useQuery(['users'], () => getUsers());
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if(query.has('error')) {
            setError(query.get('error')!);
            setQuery("");
        }
    }, []);

    const gotDetail = (item: User) => {
        navigate('/users/' + item.id);
    }

    const gotEdit = (item: User) => {

    }

    const deleteUser = (item: User) => {

    }

    if(isError) {
        <h1>Errore lista users</h1>
    }

    if(isLoading) {
        <h3>...</h3>
    }

    return (
        <div className="m-5">
            {error && <div className="row">
                <h1>{error}</h1>
            </div> }
            <UserListHeader/>
            {data?.map(u => <UserListRow
                key={u.id}
                item={u} gotoDetail={gotDetail}
                gotoEdit={gotEdit}
                deleteItem={deleteUser}
            />)}
        </div>
    );
}