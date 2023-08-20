import { Role } from 'src/types';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto implements UserEntity {
    readonly email: string;
    readonly password: string;
    readonly roles: Role[];
    readonly username: string;
}
