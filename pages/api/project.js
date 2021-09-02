import project from "./project.json";

export const getProjects = () => {
  return project;
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
