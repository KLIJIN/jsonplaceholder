import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { OpenAI } from './openai';


const colors = require('colors');
const PORT = 8080;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('заголовок сваггера')
  .setDescription('description сваггера')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, document);

const openAI = new OpenAI('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');


  await app.listen(PORT);
  console.log(colors.brightBlue(`Server strting on port: ${PORT}`));
}
bootstrap();
