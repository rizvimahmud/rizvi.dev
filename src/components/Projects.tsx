import { projects } from "~/lib/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <ul className="grid grid-cols-1 ">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard
            project={project}
            isPersonalWebsite={project.isPersonalWebsite}
          />
        </li>
      ))}
    </ul>
  );
};
