import 'reflect-metadata';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import path from 'path';
import { ___prod___ } from './utils/contants';
import { createTypeORMConnection } from './utils/createTypeORMConnection';

dotenv.config();

const bootstrap = async () => {
  if (!process.env.DB_PASSWORD) {
    throw new Error('??>> {" DB_PASSWORD must be defined!! "} ');
  }

  const conn = await createTypeORMConnection();

  if (!conn.isConnected) {
    throw new Error('Database Connection has not been established yet!');
  }

  await conn.runMigrations();

  const server = new ApolloServer({
    schema: await buildSchema({
      validate: false,
      resolvers: [path.join(__dirname, './resolvers/**.ts')],
    }),
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

bootstrap();
