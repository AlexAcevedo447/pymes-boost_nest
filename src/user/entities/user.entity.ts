import { Role } from 'src/types';

export class UserEntity {
    username: string;
    email: string;
    password: string;
    roles: Role[];
    constructor(user: UserEntity) {
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.roles = user.roles;
    }
}
