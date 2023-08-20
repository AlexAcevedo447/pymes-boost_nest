import mongoose, { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import { DB_PROVIDER_NAME } from 'src/constants';

dotenv.config();

export const databaseProviders = [
    {
        provide: DB_PROVIDER_NAME,
        useFactory: (): Promise<typeof mongoose> =>
            connect(<string>process.env.DB_URL),
    },
];
