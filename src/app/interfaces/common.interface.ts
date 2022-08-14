import { OrderItem } from "../models/order-item.model";

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

export interface OrderResponse {
    address: string;
    date: string;
    deliveryPrice: number;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    products: OrderItem[];
}
