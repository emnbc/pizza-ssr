export class Good {
    id?: number | null;
    name: string | null;
    description: string | null;
    img: string | null;
    count?: number | null;
    price: number | null;

    constructor(obj?: Good) {
        this.id = obj ? obj.id : null;
        this.name = obj ? obj.name : null;
        this.description = obj ? obj.description : null;
        this.img = obj ? obj.img : null;
        this.price = obj ? obj.price : null;
    }
}