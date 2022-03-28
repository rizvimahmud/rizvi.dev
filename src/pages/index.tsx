import { Layout } from "~/components/Layouts/Layout";
import { allBlogs } from ".contentlayer/generated";
import { pick } from "contentlayer/client";
import { Head } from "~/components/Head";
import { InferGetStaticPropsType } from "next";
import { Projects } from "~/components/Projects";
import { Blogs } from "~/components/Blogs";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head />
      <Layout>
        <div className="max-w-2xl mx-auto">
          <section>
            <h1 className="text-3xl font-bold md:font-extrabold text-slate-1 tracking-tight">
              Rizvi Mahmud
            </h1>
            <span className="text-slate-5 text-base mt-1">
              Software Developer
            </span>
            <p className="text-lg font-normal text-slate-4 leading-7 mt-5 mr-3">
              Exploring the world of user intefaces. Interested in React, Svelte
              and Jamstack.
            </p>
          </section>

          <section className="mt-12 md:mt-16">
            <h2 className="text-xl font-bold text-slate-5 pb-4">Writting</h2>
            <Blogs posts={posts} />
          </section>
          <section className="mt-12 md:mt-16">
            <h2 className="text-xl font-bold text-slate-5 pb-4">Work</h2>
            <Projects />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, ["_id", "slug", "title", "publishedAt", "summary"])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 2);

  return {
    props: {
      posts,
    },
  };
}
