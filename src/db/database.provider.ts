import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(<string>process.env.DB_URL),
    },
];
