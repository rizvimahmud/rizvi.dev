import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type NextLinkProps = {
  text?: string;
  className?: string;
  children?: ReactNode;
} & LinkProps;

export const NextLink = ({
  href,
  text = "",
  children,
  className = "",
  ...props
}: NextLinkProps) => {
  return (
    <Link href={href} {...props}>
      <a className={className} {...props}>
        {text || (children && children)}
      </a>
    </Link>
  );
};
