import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const HomePage = () => {
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 ml-6">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
