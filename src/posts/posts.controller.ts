import { Controller, Get, Res } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  /* запрос данных по всем постам  */
  async getPosts(@Res() res) {
    const arr = await this.postsService.getPosts();
    return res.status(200).send(arr);
  }
}
