import { Dimension } from 'src/types';
import { ProductEntity } from '../entities/product.entity';

export class CreateProductDto implements ProductEntity {
    readonly name: string;
    readonly description: string;
    readonly dimensions: Dimension[];
    readonly image: string;
    readonly price: number;
    readonly quantity: number;
}
