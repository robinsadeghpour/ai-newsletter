import Sidebar from "lotti/components/Sidebar";
import "lotti/styles/globals.css";
import { TRPCReactProvider } from "lotti/trpc/react";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "LottiAi",
  description: "LottiAi Magic News",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${inter.variable} h-full`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <div className="flex h-full">
            <Sidebar />
            <main className="h-full flex-1">{children}</main>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
