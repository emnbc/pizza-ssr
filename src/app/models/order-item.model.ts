import { Good } from './good.model';

export class OrderItem {
    id?: number | null;
    price?: number | null;
    good: Good;
    quantity: number;

    constructor(obj: OrderItem) {
        this.id = obj.id ? obj.id : null;
        this.price = obj.price ? obj.price : null;
        this.good = obj.good;
        this.quantity = obj.quantity;
    }
}