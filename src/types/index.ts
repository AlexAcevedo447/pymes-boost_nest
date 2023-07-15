interface MongoQueryStatus<DataType> {
    reason: string;
    success: boolean;
    data: DataType | Array<DataType>;
}
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
interface Product {
    name: string;
    description: string;
    weight: Dimension;
    volume?: Dimension;
    price: string;
    image: string;
    quantity: number;
}
interface Shelf_Availability {
    product_quantity: number;
    product_dimensions: string;
}
interface Shelf {
    storage_capacity: number;
    availability: Shelf_Availability;
    level: string;
    products: Array<Product>;
}

interface Role {
    name: string;
}

interface User {
    username: string;
    email: string;
    password: string;
    roles: Role[];
}

export {
    Role,
    Dimension,
    Location,
    MongoQueryStatus,
    Product,
    Shelf,
    Shelf_Availability,
    User,
};
