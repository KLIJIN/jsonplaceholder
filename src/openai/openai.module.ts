import { Module } from '@nestjs/common';
import { ChatGPTService } from './openai.service';
import { OpenaiController } from './openai.controller';

@Module({
  controllers: [OpenaiController],
  providers: [ChatGPTService],
})
export class OpenaiModule {}
