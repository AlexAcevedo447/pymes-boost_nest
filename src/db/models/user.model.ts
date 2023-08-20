import { Connection } from 'mongoose';
import { DB_PROVIDER_NAME, DB_USER_MODEL } from 'src/constants';
import { UserSchema } from '../schemas/user.schema';
import { UserEntity } from 'src/user/entities/user.entity';

export const userProviders = [
    {
        provide: DB_USER_MODEL,
        useFactory: (connection: Connection) =>
            connection.model<UserEntity>('User', UserSchema),
        inject: [DB_PROVIDER_NAME],
    },
];
