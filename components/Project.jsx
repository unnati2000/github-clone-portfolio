import ProjectCard from "./ProjectCard";

const Project = ({ projects }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {projects?.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Project;
