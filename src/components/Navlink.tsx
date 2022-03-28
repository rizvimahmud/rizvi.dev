import Link from "next/link";
import cn from "clsx";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  text?: string;
  children?: ReactNode;
  className?: string;
}

export const Navlink = ({ href, text, children, className }: NavLinkProps) => {
  const router = useRouter();
  const active = router.pathname === href;

  const classes = cn(
    "inline-block text-base text-slate-2 font-normal capitalize leading-4 tracking-wide px-4 py-2 rounded-lg hover:bg-primary-light hover:text-slate-1  transition-colors ease-in delay-150 focus:outline-none focus:ring-2 ring-slate-400 ring-inset",
    className && className,
    active && "font-semibold text-slate-1"
  );

  return (
    <Link href={href}>
      <a className={classes}>{(children && children) || text}</a>
    </Link>
  );
};
