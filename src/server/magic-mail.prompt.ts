import {PromptTemplate} from "lotti/server/openai";

export interface MagicNews {
  title: string;
  content: string;
}

export const magicNewsTemplate = {
  id: "magic-mail-1.0",
  render: () => `
    Generate a daily email tailored for an elderly audience that includes the following sections:

    A warm and friendly greeting without using the phrase 'I hope this message finds you well'.
    An interesting fact or trivia piece relevant to today's date or a significant historical event that happened on this day.
    A short, uplifting story or anecdote that is easy to relate to and encourages a sense of connection or nostalgia.
    A thought-provoking question or a light-hearted riddle to stimulate the mind.
    An inspiring quote to provide motivation and positivity for the day.
    A cheerful sign-off that encourages a sense of community and belonging.

    Ensure the language is clear, respectful, and engaging, suitable for an elderly audience.
    The content should be diverse and rotate topics regularly to maintain interest and engagement.
    
    Provide the content in JSON format.

    Format: {"title": "Title", "content": "Your content here, aim for around 300 words"}
    `,

} satisfies PromptTemplate<MagicNews>;