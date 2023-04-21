import { Body, Controller, Post, Res } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenAI } from '../openai';
 

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  private openAI = new OpenAI(
    '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',
  );
  private topic = 'NodeJs';
  private model = 'text-davinci-003';

  @Post('/mes')
  async getOne(@Body() body, @Res() res) {
    console.log(body);
    const { message } = body;
    await this.openAI
      .generateText(message, this.model, 800)
      .then((text) => {
        return res.status(200).send(text);
      })
      .catch((error) => {
        console.error(error);
        return res.status(200).send(error);
      });
  }
}
