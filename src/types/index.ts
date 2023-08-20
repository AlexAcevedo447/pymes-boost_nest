import { ProductEntity } from 'src/product/entities/product.entity';
interface Location {
    name: string;
    category: string;
    row: number;
    column: number;
}
interface Dimension {
    quantity: string;
    measure_unity: string;
}

interface Shelf_Availability {
    product_quantity: number;
    product_dimensions: string;
}
interface Shelf {
    storage_capacity: number;
    availability: Shelf_Availability;
    level: string;
    products: Array<ProductEntity>;
}

interface Role {
    name: string;
}

export { Role, Dimension, Location, Shelf, Shelf_Availability };
