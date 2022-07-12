import { Good } from './good.model';

export class Order {
    id?: number | null;
    price?: number | null;
    good: Good | null;
    quantity: number | null;

    constructor(obj?: Order) {
        this.id = obj ? obj.id : null;
        this.price = obj ? obj.price : null;
        this.good = obj ? obj.good : null;
        this.quantity = obj ? obj.quantity : null;
    }
}