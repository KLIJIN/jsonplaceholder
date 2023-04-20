import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  constructor(private readonly httpService: HttpService) {}

  /** запрос всех тудушек */
  async getAllTodos(): Promise<any> {
    const response = await this.httpService
      .get('https://jsonplaceholder.typicode.com/todos')
      .toPromise();

    return response.data;
  }
}
