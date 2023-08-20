import { Schema } from 'mongoose';
import { UserEntity } from 'src/user/entities/user.entity';

export const UserSchema = new Schema<UserEntity>({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [
        {
            name: {
                type: String,
            },
        },
    ],
});
UserSchema.path('roles').validate((val) => val.length > 0);
