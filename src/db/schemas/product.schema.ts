import { Schema } from 'mongoose';
import { ProductEntity } from 'src/product/entities/product.entity';

const ProductSchema = new Schema<ProductEntity>({
    name: {
        type: String,
        maxlength: 100,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    dimensions: [
        {
            quantity: {
                type: String,
            },
            measure_unity: {
                type: String,
            },
        },
    ],
});

export { ProductSchema };
