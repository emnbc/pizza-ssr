import { Good } from './good.model';

export class OrderItem {
    id?: number | null;
    price?: number | null;
    product: Good;
    quantity: number;

    constructor(obj: OrderItem) {
        this.id = obj.id ? obj.id : null;
        this.price = obj.price ? obj.price : null;
        this.product = obj.product;
        this.quantity = obj.quantity;
    }
}