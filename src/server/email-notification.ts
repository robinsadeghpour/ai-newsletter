import {EventsEnum, sendEvent, sendTransactional, TransactionalMailsEnum} from "lotti/server/loops";
import {MagicNews} from "lotti/server/magic-mail.prompt";
import {db} from "lotti/server/db";

export const sendSignUpEmail = async (email: string, name: string) => {
  await sendEvent(email, EventsEnum.SIGN_UP, {name});
}

export const sendMagicMail = async (news: MagicNews) => {
  const contacts = await db.query.newsSubscriptionList.findMany()

  await Promise.all(contacts.map(({email}) => {
    return sendTransactional(TransactionalMailsEnum.MAGIC_MAIL, email, {title: news.title, content: news.content})
  }))
}