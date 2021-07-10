export class Product{
    id: number;
    name: string;
    img: string;
    price: number;
    description: string;
    qty: number;

    constructor(id: number, price: number, name: string, img: string, description: string, qty: number){
        this.id = id,
        this.name = name,
        this.img = img,
        this.price = price,
        this.description = description,
        this.qty = qty
    }
}