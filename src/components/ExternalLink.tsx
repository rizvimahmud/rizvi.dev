import { ExternallinkIcon } from "./icons";

export const ExternalLink = ({
  href,
  target,
  children,
  showicon,
  ...props
}: JSX.IntrinsicElements["a"] & { showicon?: boolean }) => (
  <a href={href} target={target ?? "_blank"} rel="noopener" {...props}>
    {children}
    {showicon && <ExternallinkIcon />}
  </a>
);
