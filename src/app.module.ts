import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ShelfModule } from './shelf/shelf.module';
import { ProductModule } from './product/product.module';
import { AppRouterModule } from './app.router';

@Module({
    imports: [AppRouterModule, UserModule, ShelfModule, ProductModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
