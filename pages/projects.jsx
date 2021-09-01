import Navbar from "../components/Navbar";
import ProfileNavbar from "../components/ProfileNavbar";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";

const projects = () => {
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex max-h-96">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 ml-6">
          <ProfileNavbar />
          <div className="flex mt-8 items-center space-x-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
