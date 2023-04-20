import { Controller, Get, Res } from '@nestjs/common';
import { TodosService } from './todos.service';
import { HttpService } from '@nestjs/axios';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/')
  /* запрос данных по всем постам  */
  async getAllTodos(@Res() res) {
    const data = await this.todosService.getAllTodos();
    return res.status(200).send(data);
  }
}
