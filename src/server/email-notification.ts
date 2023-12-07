import { db } from "lotti/server/db";
import { sendTransactional, TransactionalMailsEnum } from "lotti/server/loops";
import { type MagicNews } from "lotti/server/magic-mail.prompt";

export const sendMagicMail = async (news: MagicNews) => {
  const contacts = await db.query.newsSubscriptionList.findMany();

  await Promise.all(
    contacts.map(({ email }) => {
      return sendTransactional(TransactionalMailsEnum.MAGIC_MAIL, email, {
        title: news.title,
        content: news.content,
      });
    }),
  );
};
