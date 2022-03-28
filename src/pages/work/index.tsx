import { Head } from "~/components/Head";
import { Layout } from "~/components/Layouts/Layout";
import { Projects } from "~/components/Projects";

export default function Page() {
  return (
    <>
      <Head title={`Work - Rizvi Mahmud`} />
      <Layout>
        <div className="max-w-2xl mx-auto ">
          <div className=" mb-12">
            <h1 className="text-[28px] font-bold text-slate-200 mb-5">Work</h1>
            <p className="text-lg text-slate-400 leading-8 mt-4 mr-3">
              Personal projects that i am working on
            </p>
          </div>
          <Projects />
        </div>
      </Layout>
    </>
  );
}
