import { BsBook } from "react-icons/bs";
import { RiBookMarkFill } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { GiEnvelope } from "react-icons/gi";

const ProfileNavbar = () => {
  return (
    <nav className="flex space-x-6 items-center">
      <div className="flex items-center text-gray-300 text-sm">
        <BsBook className="mr-2 text-gray-600" />
        <p className="text-sm">Overview</p>
      </div>
      <div className="flex items-center text-gray-300 text-sm">
        <RiBookMarkFill className="mr-2 text-gray-600" />
        <p className="text-sm">
          Repositories
          <span class="inline-flex items-center justify-center px-2 py-1 ml-1 mr-2 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full">
            28
          </span>
        </p>
      </div>
      <div className="flex items-center text-gray-300 text-sm">
        <AiOutlineProject className="mr-2 text-gray-600" />
        <p className="text-sm">Projects</p>
      </div>
      <div className="flex items-center text-gray-300 text-sm">
        <GiEnvelope className="mr-2 text-gray-600" />
        <p className="text-sm">Contact Me</p>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
