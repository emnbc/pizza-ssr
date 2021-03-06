export interface GoodResponse {
    id: number;
    name: string;
    description: string;
    img: string;
    count: number;
    price: number;
}

export interface LoginPost {
    email: string;
    password: string;
}