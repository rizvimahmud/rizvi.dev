import { Project } from "~/lib/projects";
import { ExternalLink } from "./ExternalLink";
import { NextImage } from "./NextImage";

export const ProjectCard = ({
  project,
  isPersonalWebsite = false,
}: {
  project: Project;
  isPersonalWebsite?: boolean;
}) => {
  const { title, githubSource, url, image } = project;

  const LINK_STYLES =
    "flex gap-1 text-sm text-slate-4 hover:text-slate-2 transition-colors delay-150 ease-in";

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-slate-3 pb-3">{title}</h3>
      <div className="my-4 px-3 py-3 bg-primary rounded-xl overflow-hidden">
        <NextImage src={image!} alt="Personal Website" priority={true} />
      </div>
      <div className="flex flex-row items-center gap-8 mt-3">
        <ExternalLink href={githubSource} showicon className={LINK_STYLES}>
          Github
        </ExternalLink>
        {!isPersonalWebsite ? (
          <ExternalLink href={url} showicon className={LINK_STYLES}>
            Live
          </ExternalLink>
        ) : null}
      </div>
    </div>
  );
};
