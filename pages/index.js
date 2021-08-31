import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex">
        <div className="bg-red-100 w-1/4"></div>
        <div className="bg-green-100 w-3/4"> repo</div>
      </div>
    </div>
  );
};

export default HomePage;
