"use client";

import {type PropsWithChildren} from "react";
import {ErrorBoundary} from "./ErrorBoundary";
import {cn} from "lotti/util";

type Props = {
  disablePadding?: boolean;
  header?: string;
};

export const Page = ({
                       children,
                       disablePadding = false,
                       header,
                     }: PropsWithChildren<Props>) => {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <div
          className={cn("min-h-[calc(100vh_-_64px)]", {
            "p-24 sm:p-16": !disablePadding,
          })}
        >
          {header && <div className="text-2xl font-semibold mb-12 ">{header}</div>}
          {children}
        </div>
      </ErrorBoundary>
    </main>
  );
};
