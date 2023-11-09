import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
/** Entities */
import { User } from '../models/User';

dotenv.config();

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as "mysql" ?? 'mysql',
    host: process.env.DB_HOST ?? 'localhost',
    username: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_DATABASE ?? 'koggi',
    port: parseInt(process.env.DB_PORT ?? '3310'),
    synchronize: true,
    entities: [User],
})