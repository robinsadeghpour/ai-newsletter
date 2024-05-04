import { db } from "@/server/db";
import { sendTransactional, TransactionalMailsEnum } from "@/server/loops";
import { type aiNewsletter } from "@/server/magic-mail.prompt";

export const sendMagicMail = async (news: aiNewsletter) => {
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
