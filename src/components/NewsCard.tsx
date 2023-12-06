import Link from 'next/link';
import React from 'react';

interface Props {
  id: number;
  title: string;
  content: string;
  className?: string;
}

export const NewsCard = ({ id, title, content, className = '' }: Props) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg px-6 py-6 ${className}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="font-bold text-xl mb-4">{title}</div>
          <p className="text-gray-700 text-base line-clamp-2">
            {content}
          </p>
        </div>

        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-8" href={`/news/${id}`}>
          Read more →
        </Link>
      </div>
    </div>
  );
};
