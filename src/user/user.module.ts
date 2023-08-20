import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from 'src/db/models/user.model';
import { DataBaseModule } from 'src/db/database.module';

@Module({
    imports: [DataBaseModule],
    controllers: [UserController],
    providers: [UserService, ...userProviders],
})
export class UserModule {}
