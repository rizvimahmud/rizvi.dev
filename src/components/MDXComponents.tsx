import { ImageProps } from "next/image";
import { ExternalLink } from "./ExternalLink";
import { NextImage } from "./NextImage";
import { NextLink } from "./NextLink";

const Image = (props: ImageProps & { caption?: string }) => {
  return (
    <figure>
      <NextImage alt={props.alt} {...props} />
      {props.caption && (
        <figcaption className="mt-2 text-slate-6 italic">
          {props.caption}
        </figcaption>
      )}
    </figure>
  );
};

const LINK_STYLE =
  " text-blue-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 ring-blue-300 transition-color delay-150 ease-linear cusrsor-pointer";

const HEADING_STYLE = "scroll-mt-24";

export const Components = {
  h2: (props: any) => <h2 className={HEADING_STYLE} {...props} />,
  h3: (props: any) => <h3 className={HEADING_STYLE} {...props} />,
  h4: (props: any) => <h4 className={HEADING_STYLE} {...props} />,
  a: ({ href = "", ...props }: any) => {
    if (href.startsWith("http")) {
      return (
        <ExternalLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          className={LINK_STYLE}
        />
      );
    }

    return <NextLink href={href} className={LINK_STYLE} {...props} />;
  },

  Image,
};
