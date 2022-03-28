import { Layout } from "~/components/Layouts/Layout";
import { NextLink } from "~/components/NextLink";

export default function Page() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center mt-32 mb-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-1">
          404 - Page not found
        </h1>
        <div className="mt-12">
          <NextLink
            href={"/"}
            text="Back To Home"
            className="px-6 py-3 rounded-md border border-slate-4 hover:border-slate-1 transition-colors delay-150 ease-in-out"
          />
        </div>
      </div>
    </Layout>
  );
}
