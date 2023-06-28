import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
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
