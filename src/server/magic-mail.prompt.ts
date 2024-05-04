import { type PromptTemplate } from "@/server/openai";

export interface aiNewsletter {
  title: string;
  content: string;
}

export const aiNewsletterTemplate = {
  id: "ai-newsletter-1.0",
  render: () => `
    Generate a weekly email newsletter that includes the following sections:

    A warm and friendly greeting without using the phrase 'I hope this message finds you well'.
    An interesting fact or trivia piece.
    A short, uplifting story or anecdote that is easy to relate to and encourages a sense of connection or nostalgia.
    A thought-provoking question or a light-hearted riddle to stimulate the mind.
    An inspiring quote to provide motivation and positivity for the day.
    A cheerful sign-off that encourages a sense of community and belonging.

    Ensure the language is clear, respectful, and engaging.
    
    Provide the content in JSON format.

    Format: {"title": "Title", "content": "Your content here, aim for around 300 words"}
    `,
} satisfies PromptTemplate<aiNewsletter>;
