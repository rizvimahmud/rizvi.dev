import Image from "next/image";
import { Navlink } from "./Navlink";
import Link from "next/link";
import logo from "../../public/assets/logo/logo.png";
import { ExternalLink } from "./ExternalLink";
import { GITHUB_PROFILE } from "~/lib/constants";

export const Nav = () => {
  return (
    <header className="w-full px-4 py-6 z-30">
      <nav className=" relative flex flex-row flex-nowrap justify-between items-center w-full max-w-2xl mx-auto">
        <div>
          <Link href={"/"}>
            <a className="inline-flex justify-center items-center p-[2px] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 focus-visible:ring-opacity-75">
              <Image
                src={logo}
                alt="Gradient Logo"
                width={30}
                height={30}
                className="rounded-full"
                priority={true}
              />
            </a>
          </Link>
        </div>

        <ul className="flex flex-row items-center  md:gap-2">
          <li>
            <Navlink href={"/blog"}>Blog</Navlink>
          </li>

          <li>
            <Navlink href={"/work"}>Work</Navlink>
          </li>
          <li>
            <ExternalLink
              href={GITHUB_PROFILE}
              showicon
              className="flex flex-row items-center gap-1 px-4 py-2 rounded-lg text-slate-2 hover:text-slate-1 hover:bg-primary-light  transition-colors ease-in delay-150 focus:outline-none focus:ring-2 ring-slate-400 ring-inset"
            >
              Github
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
