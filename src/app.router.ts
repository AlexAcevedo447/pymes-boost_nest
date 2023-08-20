import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AppModule } from './app.module';
import { ShelfModule } from './shelf/shelf.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
    {
        path: '/api',
        module: AppModule,
        children: [
            {
                path: '/shelfs',
                module: ShelfModule,
            },
            {
                path: '/products',
                module: ProductModule,
            },
            {
                path: '/users',
                module: UserModule,
            },
        ],
    },
];

@Module({
    imports: [RouterModule.register(routes)],
    exports: [AppRouterModule],
})
export class AppRouterModule {}
