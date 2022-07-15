import axios from "axios";
import { User } from "./models/user.model";


const BASE_URL = "http://localhost:3500/";


export const getUsers = async (): Promise<Array<User>> => {
    const res = await axios.get<Array<User>>(`${BASE_URL}users`);
    return res.data;
}
