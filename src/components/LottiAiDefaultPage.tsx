import { Page } from "lotti/components/Page";
import Image from "next/image";

const LottiAiDefaultPage = () => {
  return (
    <Page>
      <div className="flex min-h-full flex-col items-center justify-center gap-4">
        <Image
          className="overflow-hidden rounded-full border-r-white shadow"
          width={192}
          height={192}
          src={"/lotti-mascot.png"}
          alt={"LottiAi Mascot"}
        />
        <div className="text-5xl font-semibold text-black">
          Hallo 👋, ich bin Lotti.
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-gray-500">
            Deine Expertin für Fragen zur digitalen Welt.
          </p>
          <a
            href={"https://lotti.ai"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Lotti jetzt fragen
          </a>
        </div>
      </div>
    </Page>
  );
};

export default LottiAiDefaultPage;
