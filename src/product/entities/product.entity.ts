import { Dimension, Product } from 'src/types';
export class ProductEntity implements Product {
    description: string;
    name: string;
    image: string;
    volume?: Dimension | undefined;
    quantity: number;
    price: string;
    weight: Dimension;
    constructor(product: Product) {
        this.name = product.name;
        this.description = product.description;
        this.image = product.image;
        this.price = product.price;
        this.quantity = product.quantity;
        this.volume = product.volume;
        this.weight = product.weight;
    }
}
