import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpStatus,
    Res,
    HttpCode,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { HTTP_ERROR_MESSAGES, HTTP_ERROR_NAMES } from 'src/constants';
import { PBError } from 'src/types/errors';

@Controller()
export class ProductController {
    private EMessage = HTTP_ERROR_MESSAGES;
    private EName = HTTP_ERROR_NAMES;
    constructor(private readonly productService: ProductService) {}

    @Post()
    async create(
        @Body() createProductDto: CreateProductDto,
        @Res() resp: Response,
    ) {
        try {
            const created = await this.productService.create(createProductDto);
            resp.status(HttpStatus.CREATED).json(created);
        } catch (error) {
            resp.status(HttpStatus.BAD_REQUEST).json(
                new PBError(
                    this.EMessage.INVALID_OR_EMPTY,
                    this.EName.POST_FAILURE,
                    error,
                ),
            );
        }
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() resp: Response) {
        try {
            const product = await this.productService.findOne(id);
            return resp.status(HttpStatus.OK).json(product);
        } catch (error) {
            return resp
                .status(HttpStatus.NOT_FOUND)
                .json(
                    new PBError(
                        this.EMessage.NOT_FOUND,
                        this.EName.GET_FAILURE,
                        error,
                    ),
                );
        }
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
        @Res() resp: Response,
    ) {
        const product = await this.productService.update(id, updateProductDto);
        if (product == null) {
            resp.status(HttpStatus.BAD_REQUEST).json({
                message:
                    'The product that you are trying to update does not exist',
            });
        } else if (product.modifiedCount == 0) {
            resp.status(HttpStatus.OK).json({ message: 'Already modified' });
        } else {
            resp.status(HttpStatus.CREATED).json({
                message: 'Successfully modified!',
            });
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string, @Res() resp: Response) {
        try {
            const deleted = await this.productService.remove(id);
            resp.status(HttpStatus.CREATED).json({
                message: 'Successfully deleted!!',
                item: deleted,
            });
        } catch (error) {
            resp.status(HttpStatus.BAD_REQUEST).json(
                new PBError(
                    this.EMessage.EXISTING_OR_DELETED,
                    this.EName.DELETE_FAILURE,
                    error,
                ),
            );
        }
    }
}
