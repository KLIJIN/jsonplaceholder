import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [PostsModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
