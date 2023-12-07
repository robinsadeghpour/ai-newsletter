"use client";

import LoadingCircleIndicator from "lotti/components/LoadingCircleIndicator";
import { Page } from "lotti/components/Page";
import { api } from "lotti/trpc/react";
import Link from "next/link";

export default function FullNews({ params }: { params: { id: string } }) {
  const { data, isLoading } = api.news.getNewsById.useQuery({
    id: +params.id,
  });

  return (
    <Page>
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <LoadingCircleIndicator />
        </div>
      )}
      {!isLoading && data && (
        <article className="mx-auto max-w-3xl p-4">
          <Link
            className="mt-8 font-medium text-blue-600 hover:underline dark:text-blue-500"
            href={"/news"}
          >
            ← Go back
          </Link>
          <h1 className="mb-8 mt-2 text-2xl font-semibold">{data.title}</h1>
          <p className="whitespace-pre-line text-lg text-gray-700">
            {data.content}
          </p>
        </article>
      )}
    </Page>
  );
}
