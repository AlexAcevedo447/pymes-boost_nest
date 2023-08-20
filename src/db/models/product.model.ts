import { Connection } from 'mongoose';
import { ProductSchema } from '../schemas/product.schema';
import { ProductEntity } from 'src/product/entities/product.entity';
import { DB_PRODUCT_MODEL, DB_PROVIDER_NAME } from 'src/constants';

export const productProviders = [
    {
        provide: DB_PRODUCT_MODEL,
        useFactory: (connection: Connection) =>
            connection.model<ProductEntity>('Product', ProductSchema),
        inject: [DB_PROVIDER_NAME],
    },
];
