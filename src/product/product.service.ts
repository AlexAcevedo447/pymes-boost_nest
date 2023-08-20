import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { ProductEntity } from './entities/product.entity';
import { DB_PRODUCT_MODEL } from 'src/constants';

@Injectable()
export class ProductService {
    constructor(
        @Inject(DB_PRODUCT_MODEL)
        private productModel: Model<ProductEntity>,
    ) {}
    async create(createProductDto: CreateProductDto) {
        const found = await this.productModel.findOne({
            name: createProductDto.name,
            description: createProductDto.description,
        });
        const hasAllValues = Object.values(
            new ProductEntity(createProductDto),
        ).every((value) => value !== null && value !== undefined);
        if (found !== null) {
            throw 'Already existing resource';
        } else if (!hasAllValues) {
            throw 'Empty values';
        } else {
            const createdProduct = new this.productModel(createProductDto);
            return await createdProduct.save();
        }
    }

    async findAll() {
        return await this.productModel.find();
    }

    async findOne(id: string) {
        try {
            const product = await this.productModel.findById(id);
            return product;
        } catch (error) {
            throw 'Resource not found';
        }
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        const found = await this.findOne(id);
        if (found == null) {
            throw found;
        } else {
            return this.productModel.updateOne(
                { _id: id },
                { $set: updateProductDto },
            );
        }
    }

    async remove(id: string) {
        // const found = await this.findOne(id);
        // found?.deleteOne();

        try {
            const deleted = await this.productModel.findOneAndDelete({
                _id: id,
            });
            if (!deleted) {
                throw 'Already deleted resource';
            } else {
                return deleted;
            }
        } catch (error) {
            throw 'Not existing resource';
        }
    }
}
