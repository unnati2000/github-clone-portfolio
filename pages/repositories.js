import Navbar from "../components/Navbar";
import ProfileNavbar from "../components/ProfileNavbar";
import Sidebar from "../components/Sidebar";
import Repositoty from "../components/Repositoty";

const repositories = () => {
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex max-h-96">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 ml-6">
          <ProfileNavbar />
          <section className="mt-4 border border-gray-900 text-gray-900">
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Find a repository..."
                className="bg-[#0d1117] border rounded px-2 text-xs text-gray-600 w-64 h-6 border-gray-800 w-84 hidden md:block"
              />
            </div>

            <Repositoty />
          </section>
        </div>
      </div>
    </div>
  );
};

export default repositories;
