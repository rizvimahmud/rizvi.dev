import { pick } from "contentlayer/client";
import { allBlogs, Blog } from "contentlayer/generated";
import { Blogs } from "~/components/Blogs";
import { Head } from "~/components/Head";
import { Layout } from "~/components/Layouts/Layout";

export default function Page({ posts }: { posts: Blog[] }) {
  return (
    <>
      <Head title="Blog - Rizvi Mahmud" />
      <Layout>
        <div className="max-w-2xl mx-auto mb-32">
          <div className="text-left mb-12">
            <h1 className="text-[28px] font-bold text-slate-200 mb-5">Blog</h1>
            <p className="text-lg text-slate-400 leading-8 mt-4 mr-3">
              Thoughts on what i am learning
            </p>
          </div>
          <Blogs posts={posts} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, ["_id", "slug", "title", "publishedAt", "summary"])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: {
      posts,
    },
  };
}
