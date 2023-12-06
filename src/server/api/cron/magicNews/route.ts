import {NextResponse} from 'next/server'
import {logger} from "lotti/util/logger";
import {generateMagicNews, saveMagicNews} from "lotti/server/magic-news";
import {sendMagicMail} from "lotti/server/email-notification";

export async function GET() {
  try {
    const generatedNews = await generateMagicNews();
    void saveMagicNews(generatedNews);

    await sendMagicMail(generatedNews)

    return NextResponse.json({}, {status: 200});
  } catch (error) {
    logger.error("Magic Mail cron failed", error)
    return NextResponse.json({error})
  }
}