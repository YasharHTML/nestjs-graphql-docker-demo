import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
@ObjectType()
export class Post extends BaseEntity {
  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  body: string;
}
