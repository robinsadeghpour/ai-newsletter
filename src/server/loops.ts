import LoopsClient from "loops";
import {env} from "lotti/env";

export const loopsClient = new LoopsClient(env.LOOPS_API_KEY);

export enum EventsEnum {
  SIGN_UP = "SIGN_UP",
}

export enum TransactionalMailsEnum {
  MAGIC_MAIL = "clptopugc00bkl70o5rmlm8x7"
}

export interface EventResponse {
  success: boolean;
}

export const sendEvent = (recipient: string, event: EventsEnum, payload?: Record<string, unknown>): Promise<EventResponse> => {
  return loopsClient.sendEvent(recipient, event, payload);
};

export const sendTransactional = (transactionalMail: TransactionalMailsEnum, recipient: string, dataVariables: Record<string, string | number>) => {
  return loopsClient.sendTransactionalEmail(transactionalMail, recipient, dataVariables)
}

export const addContact = (email: string, payload?: Record<string, unknown>) => {
  return loopsClient.createContact(email, payload)
}
