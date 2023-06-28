import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from 'src/resources/post/entities/post.entity';

export const TypeOrmConfig: () => TypeOrmModuleOptions = () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNC === 'Y',
  entities: [Post]
});
