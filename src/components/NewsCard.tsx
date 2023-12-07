import Link from "next/link";

interface Props {
  id: number;
  title: string;
  content: string;
  className?: string;
}

export const NewsCard = ({ id, title, content, className = "" }: Props) => {
  return (
    <div
      className={`max-w-sm overflow-hidden rounded px-6 py-6 shadow-lg ${className}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 text-xl font-bold">{title}</div>
          <p className="line-clamp-2 text-base text-gray-700">{content}</p>
        </div>

        <Link
          className="mt-8 font-medium text-blue-600 hover:underline dark:text-blue-500"
          href={`/news/${id}`}
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};
