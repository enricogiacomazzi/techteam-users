export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
    addresses: Address[];
}

export interface Address {
    street: string;
    zipcode: string;
    city: string;
    country: string;
}