import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './resources/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLConfig } from './config/graphql.config';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>(GraphQLConfig()),
    TypeOrmModule.forRoot(TypeOrmConfig()),
    PostModule,
  ],
})
export class AppModule {}
