import { Schema, Types } from 'mongoose';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Dimension } from 'src/types';

const ProductSchema = new Schema<ProductEntity>(
    {
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
            type: String,
        },
        quantity: {
            type: Number,
        },
        volume: {
            type: Types.Subdocument<Dimension | undefined>,
        },
        weight: {
            type: Types.Subdocument<Dimension>,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
