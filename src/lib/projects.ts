export interface Project {
  id: number;
  title: string;
  githubSource: string;
  url: string;
  image?: string;
  isPersonalWebsite?: boolean;
}

export const projects: Array<Project> = [
  {
    id: 1,
    title: "Personal Website",
    githubSource: "https://github.com/rizvimahmud/rizvi.dev",
    url: "http://localhost:3000",
    image: "/assets/projects/website.png",
    isPersonalWebsite: true,
  },
];
