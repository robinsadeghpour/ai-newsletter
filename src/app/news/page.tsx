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
          <div className="flex flex-wrap gap-x-6 gap-y-12">
            {data?.map((news) => <NewsCard
                id={news.id}
                title={news.title}
                content={news.content}
                className={"w-1/3"}
              />
            )}
          </div>
      }
    </Page>
  );
};

export default News;