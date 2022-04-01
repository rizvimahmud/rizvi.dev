import Link from "next/link";
import { formatDate } from "~/lib/utils";
import type { BlogExcerptType } from "./Blogs";

export const BlogCard = ({ post }: { post: BlogExcerptType }) => {
  const { slug, title, summary, publishedAt } = post;
  const formattedDate = formatDate(publishedAt);

  return (
    <Link href={`/blog/${slug}`}>
      <a className="block px-6 py-5 rounded-lg border border-slate-8 hover:border-slate-7 transition-colors duration-150 ease-linear cursor-pointer">
        <h3 className="text-xl font-medium text-slate-2 pb-3">{title}</h3>
        <summary className="block pb-2 text-slate-4 tracking-wide leading-6">
          {summary}
        </summary>
        <time className="inline-block text-sm text-slate-6">
          {formattedDate}
        </time>
      </a>
    </Link>
  );
};
