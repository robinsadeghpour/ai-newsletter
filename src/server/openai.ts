import { env } from "lotti/env";
import { logger } from "lotti/util/logger";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
  organization: env.OPENAI_ORG_ID,
});

const defaultOptions = { model: "gpt-3.5-turbo-1106", temperature: 0.7 };

export type PromptTemplate<T> = {
  id: string;
  render: (params?: T) => string;
};

export class Prompt<T> {
  constructor(
    public template: PromptTemplate<T>,
    public params?: T,
  ) {}
  render() {
    return this.template.render(this.params);
  }
}

export const createChatCompletion = async <T>(prompt: Prompt<T>) => {
  const response = await openai.chat.completions.create({
    ...defaultOptions,
    messages: [{ role: "user" as const, content: prompt.render() }],
    response_format: { type: "json_object" },
  });
  const result = response.choices[0];

  logger.info("created open ai chat completion", {
    openai: {
      model: response.model,
      prompt: {
        id: prompt.template.id,
        params: prompt.params,
        text: prompt.render(),
      },
      result: {
        text: result?.message?.content,
        finish_reason: result?.finish_reason,
      },
      tokens: response.usage,
    },
  });

  return result?.message?.content;
};
