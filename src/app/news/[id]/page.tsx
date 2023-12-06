"use client";

import React from 'react';
import { Page } from "lotti/components/Page";
import { api } from "lotti/trpc/react";
import LoadingCircleIndicator from "lotti/components/LoadingCircleIndicator";
import Link from "next/link";

export default function FullNews({ params }: { params: { id: string } }) {
  const { data, isLoading } = api.news.getNewsById.useQuery({
    id: +params.id
  });

  return (
    <Page>
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <LoadingCircleIndicator />
        </div>
      )}
      {!isLoading && data &&
          <article className="mx-auto p-4 max-w-3xl">
              <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-8" href={"/news"}>
                  ← Go back
              </Link>
              <h1 className="text-2xl font-semibold mt-2 mb-8">{data.title}</h1>
              <p className="text-gray-700 text-lg whitespace-pre-line">{data.content}</p>
          </article>
      }
    </Page>
  );
};
