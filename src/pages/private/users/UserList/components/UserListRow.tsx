import React from "react";
import { User } from "../../../../../models/user.model";

interface UserListRowProps {
    item: User,
    gotoDetail: (item: User) => void;
    gotoEdit: (item: User) => void;
    deleteItem: (item: User) => void;
}


export const UserListRow: React.FC<UserListRowProps> = ({item, gotoDetail, gotoEdit, deleteItem}) => (
    <div className="row">
        <div className="col col-2">
            {item.name}
        </div>
        <div className="col col-2">
            {item.surname}
        </div>
        <div className="col col-2">
            {item.email}
        </div>
        <div className="col col-2">
            {item.age}
        </div>
        <div className="col col-4">
            <button className="btn btn-primary m-2" onClick={() => gotoDetail(item)}>
                <i className="fa fa-search"></i>
            </button>
            <button className="btn btn-primary m-2" onClick={() => gotoEdit(item)}>
                <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-danger m-2" onClick={() => deleteItem(item)}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
    </div>
)