import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ChatGPTService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  @Post()
  async createCompletion(@Body() body) {
    const { question, model, temperature } = body;
    return this.chatGPTService.createCompletion(body);
  }


  @Get(':mes')
  async getCompletion(@Param() params: any) {
    console.log(params.mes);
    return this.chatGPTService.createCompletion(params.mes);
  }
}
