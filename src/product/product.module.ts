import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DataBaseModule } from 'src/db/database.module';
import { ProductService } from './product.service';
import { productProviders } from 'src/db/models/product.model';

@Module({
    imports: [DataBaseModule],
    controllers: [ProductController],
    providers: [ProductService, ...productProviders],
})
export class ProductModule {}
