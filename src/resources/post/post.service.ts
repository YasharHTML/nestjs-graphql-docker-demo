import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { Pagination } from 'src/common';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  create(createPostInput: CreatePostInput) {
    const { body, title } = createPostInput;
    return this.postRepository.save({ body, title });
  }

  findAll({ limit, page }: Pagination) {
    return this.postRepository.find({
      skip: page * limit,
      take: limit,
    });
  }

  findOne(id: string) {
    return this.postRepository.findOne({ where: { id } });
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    const { body, title } = updatePostInput;
    return this.postRepository.save({ id, body, title });
  }

  remove(id: string) {
    return this.postRepository
      .softDelete(id)
      .then(() =>
        this.postRepository.findOne({ where: { id }, withDeleted: true }),
      );
  }
}
