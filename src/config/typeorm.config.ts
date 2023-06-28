import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: () => TypeOrmModuleOptions = () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNC === 'Y',
  autoLoadEntities: true,
});
