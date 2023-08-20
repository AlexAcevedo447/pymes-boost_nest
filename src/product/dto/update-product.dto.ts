import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Dimension } from 'src/types';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    readonly description?: string | undefined;
    readonly name?: string | undefined;
    readonly dimensions?: Dimension[] | undefined;
    readonly image?: string | undefined;
    readonly price?: number | undefined;
    readonly quantity?: number | undefined;
}
