import ProjectCard from "./ProjectCard";

const Project = ({ projects }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {projects?.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Project;
