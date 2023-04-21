import { Body, Controller, Post, Res } from '@nestjs/common';
import { ChatGPTService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  @Post()
  async createCompletion(@Body() body) {
    const { question, model, temperature } = body;
    return this.chatGPTService.createCompletion(body);
  }
}
