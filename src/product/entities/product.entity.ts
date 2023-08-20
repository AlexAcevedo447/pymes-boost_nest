import { Dimension } from 'src/types';
export class ProductEntity {
    description: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
    dimensions: Dimension[];
    constructor(product: ProductEntity) {
        this.name = product.name;
        this.description = product.description;
        this.image = product.image;
        this.price = product.price;
        this.quantity = product.quantity;
        this.dimensions = product.dimensions;
    }
}
