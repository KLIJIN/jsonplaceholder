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

  async getCompletion(question) {
    try {
      const params: CreateCompletionRequest = {
        prompt: question,
        model: 'text-davinci-003',
        temperature: 0.9,
      };

      const { data } = await this.openAIApi.createCompletion(params);

      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
