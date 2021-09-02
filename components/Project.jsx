import ProjectCard from "./ProjectCard";

const Project = ({ projects }) => {
  return (
    <div className="flex mt-8 items-center space-x-3">
      {projects?.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Project;
