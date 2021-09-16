import { createConnection } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const createTypeORMConnection = async () => {
  // const options = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: process.env.DB_PASSWORD!,
    database: 'bookstore_db',
    logging: true,
    synchronize: true,
    entities: [path.join(__dirname, '../entities/**.ts')],
  });
};
