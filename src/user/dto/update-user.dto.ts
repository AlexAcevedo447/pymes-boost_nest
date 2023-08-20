import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Role } from 'src/types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly email?: string | undefined;
    readonly password?: string | undefined;
    readonly roles?: Role[] | undefined;
    readonly username?: string | undefined;
}
