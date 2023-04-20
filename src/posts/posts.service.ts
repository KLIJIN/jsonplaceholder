import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PostsService {
  async getPosts() {
    const req = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = req;
    return data;
  }
}
