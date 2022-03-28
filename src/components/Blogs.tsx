import { Blog } from "contentlayer/generated";
import { BlogCard } from "./BlogCard";

export type BlogExcerptType = Pick<
  Blog,
  "_id" | "title" | "slug" | "summary" | "publishedAt"
>;

export const Blogs = ({ posts }: { posts: Array<BlogExcerptType> }) => {
  return (
    <ul className="space-y-8 pt-3">
      {posts.map((post) => (
        <li key={post._id}>
          <BlogCard post={post} />
        </li>
      ))}
    </ul>
  );
};
