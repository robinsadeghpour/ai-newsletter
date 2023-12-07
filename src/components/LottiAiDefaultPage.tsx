import React from 'react';
import {Page} from "lotti/components/Page";
import Image from "next/image";

const LottiAiDefaultPage = () => {
  return (
    <Page>
      <div className="flex flex-col gap-4 min-h-full justify-center items-center">
        <Image className="rounded-full shadow border-r-white overflow-hidden" width={192} height={192} src={"/lotti-mascot.png"} alt={"LottiAi Mascot"}/>
        <div className="text-5xl font-semibold text-black">Hallo 👋, ich bin Lotti.</div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-gray-500 font-semibold">Deine Expertin für Fragen zur digitalen Welt.</p>
          <a href={"https://lotti.ai"} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Lotti jetzt fragen
          </a>
        </div>
      </div>
    </Page>
  );
};

export default LottiAiDefaultPage;
