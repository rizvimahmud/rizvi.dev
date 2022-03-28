import { allBlogs, Blog } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Layout } from "~/components/Layouts/Layout";
import { useMDXComponent } from "next-contentlayer/hooks";
import { formatDate } from "~/lib/utils";
import { LeftArrowIcon } from "~/components/icons/LeftArrowIcon";
import Link from "next/link";
import { Components } from "~/components/MDXComponents";
import { Head } from "~/components/Head";

interface PageProps {
  post: Blog;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Page: NextPage<PageProps> = ({ post }) => {
  const {
    title,
    summary,
    publishedAt,
    body: { code },
  } = post;
  const MDXContent = useMDXComponent(code);
  const formattedDate = formatDate(publishedAt);

  return (
    <>
      <Head title={`${title} - Rizvi Mahmud`} description={summary} />
      <Layout>
        <div className="max-w-2xl mx-auto ">
          <Link href={"/blog"}>
            <a className="inline-flex flex-row items-center gap-1 text-slate-3 hover:text-slate-1 md:-ml-5 mb-8">
              <LeftArrowIcon />
              <span>blog</span>
            </a>
          </Link>
          <article>
            <header>
              <h1 className="text-3xl md:text-4xl text-slate-1 font-extrabold tracking-tight mb-4">
                {title}
              </h1>
              <span className="inline-block mb-2">
                <time className="text-sm text-slate-4">{formattedDate}</time>
              </span>
            </header>
            <div className="mt-6 w-full prose prose-invert prose-p:text-slate-3 prose-headings:text-slate-2 prose-hr:bg-slate-7">
              <MDXContent
                components={{
                  ...Components,
                }}
              />
            </div>
          </article>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  ctx
) => {
  const { slug } = ctx.params!;
  const post = allBlogs.find((blog) => blog.slug === slug)!;

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = allBlogs.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Page;
