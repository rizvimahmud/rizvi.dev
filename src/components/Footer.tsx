import { TWITTER_HANDLE } from "~/lib/constants";
import { ExternalLink } from "./ExternalLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-12 px-6 ">
        <div className="flex flex-row justify-between items-center w-full md:max-w-2xl mx-auto pt-6 border-t border-slate-9 ">
          <span className="text-slate-5 text-base">
            &copy; {currentYear} - Rizvi Mahmud
          </span>
          <span>
            <ExternalLink
              href={TWITTER_HANDLE}
              showicon
              className="inline-flex items-center gap-2 text-slate-5 text-base hover:text-slate-4"
            >
              <span>Twitter</span>
            </ExternalLink>
          </span>
        </div>
      </footer>
    </>
  );
};
