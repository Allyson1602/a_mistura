import OpenAI from 'openai';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources';
import descriptionIAGenerate from 'src/utils/description-ia-generate';

const openAiMessages: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content: descriptionIAGenerate,
  },
];

const openAiData: ChatCompletionCreateParamsNonStreaming = {
  model: 'gpt-3.5-turbo-1106',
  temperature: 1,
  response_format: { type: 'json_object' },
  messages: openAiMessages,
};

export const openAiImageData: OpenAI.Images.ImageGenerateParams = {
  model: 'dall-e-2',
  prompt: '',
  size: '1024x1024',
  quality: 'standard',
  n: 1,
};

export default openAiData;
