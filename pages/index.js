import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="bg-green-100 w-3/4"> repo</div>
      </div>
    </div>
  );
};

export default HomePage;
