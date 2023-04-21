import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';

@Injectable()
export class ChatGPTService {
  private readonly openAIApi: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      organization: '',
      apiKey: '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',
    });

    this.openAIApi = new OpenAIApi(configuration);
  }

  async createCompletion({ question, model, temperature }) {
    try {
      const params: CreateCompletionRequest = {
        prompt: question,
        model: model || 'text-davinci-003',
        temperature: temperature || 0.9,
      };
      const { data } = await this.openAIApi.createCompletion(params);

      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
