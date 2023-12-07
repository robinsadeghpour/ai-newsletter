import LoopsClient from "loops";
import {env} from "lotti/env";

export const loopsClient = new LoopsClient(env.LOOPS_API_KEY);

export enum TransactionalMailsEnum {
  MAGIC_MAIL = "clptopugc00bkl70o5rmlm8x7"
}

export const sendTransactional = (transactionalMail: TransactionalMailsEnum, recipient: string, dataVariables: Record<string, string | number>) => {
  return loopsClient.sendTransactionalEmail(transactionalMail, recipient, dataVariables)
}
