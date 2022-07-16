export class Good {
    id?: number | null;
    name: string;
    description: string;
    img: string;
    price: number;

    constructor(obj: Good) {
        this.id = obj.id ? obj.id : null;
        this.name = obj.name;
        this.description = obj.description;
        this.img = obj.img;
        this.price = obj.price;
    }
}