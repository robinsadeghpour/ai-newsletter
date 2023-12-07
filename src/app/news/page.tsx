"use client"

import React from 'react';
import {Page} from "lotti/components/Page";
import {NewsCard} from "lotti/components/NewsCard";
import {api} from "lotti/trpc/react";
import LoadingCircleIndicator from "lotti/components/LoadingCircleIndicator";

const News = () => {
  const {data, isLoading} = api.news.getNews.useQuery()

  return (
    <Page header={"News"}>
      {isLoading && (
        <div className="h-full w-full flex items-center">
          <LoadingCircleIndicator/>
        </div>
      )}
      {!isLoading &&
          <div className="flex flex-wrap -m-2 gap-x-4 gap-y-12">
            {data?.map((news) => <NewsCard
                id={news.id}
                title={news.title}
                content={news.content}
                className={"flex-1"}
              />
            )}
          </div>
      }
    </Page>
  );
};

export default News;