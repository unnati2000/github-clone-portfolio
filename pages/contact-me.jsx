import Navbar from "../components/Navbar";
import ProfileNavbar from "../components/ProfileNavbar";
import Sidebar from "../components/Sidebar";
import ContactMe from "../components/ContactMe";

const contactMe = () => {
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex max-h-96">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 ml-6">
          <ProfileNavbar />
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default contactMe;
