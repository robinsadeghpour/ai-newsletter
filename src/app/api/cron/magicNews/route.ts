import { sendMagicMail } from "lotti/server/email-notification";
import { generateMagicNews, saveMagicNews } from "lotti/server/magic-news";
import { logger } from "lotti/util/logger";
import { NextResponse } from "next/server";

export const revalidate = 0

export async function GET() {
  logger.info("running cron job...");
  try {
    const generatedNews = await generateMagicNews();
    void saveMagicNews(generatedNews);
    void sendMagicMail(generatedNews);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    logger.error("Magic Mail cron failed", error);
    const response = NextResponse.json({ error } );
    response.headers.set('Cache-Control', 'no-cache');

    return response;
  }
}
