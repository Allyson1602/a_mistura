import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources';
import descriptionIAGenerate from 'src/utils/description-ia-generate';

const bardAiMessages: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content: descriptionIAGenerate,
  },
];

const bardAiData: ChatCompletionCreateParamsNonStreaming = {
  model: 'gpt-3.5-turbo-1106',
  temperature: 1,
  response_format: { type: 'json_object' },
  messages: bardAiMessages,
};

export default bardAiData;
