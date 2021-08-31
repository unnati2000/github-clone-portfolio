import { BsBook } from "react-icons/bs";
import { RiBookMarkFill } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { GiEnvelope } from "react-icons/gi";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <nav className="flex space-x-6 items-center">
        <div className="flex items-center text-gray-300 text-sm">
          <BsBook className="mr-2 text-gray-600" />
          <p className="text-sm">Overview</p>
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <RiBookMarkFill className="mr-2 text-gray-600" />
          <p className="text-sm">Repositories</p>
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

      <section className="border p-3 rounded border-gray-700 my-6">
        <p className="text-gray-300 text-xs mt-4">
          unnati2000 / README.<span className="text-gray-500">md</span>
        </p>

        <h1 className="text-gray-300 font-semibold text-2xl mt-3">
          Hi there 👋, my name is Unnati Bamania
        </h1>

        <hr className="my-2 divide-gray-500" />

        <h1 className="text-gray-300 font-semibold text-lg mt-3">
          I am a MERN stack web developer
        </h1>
      </section>
    </div>
  );
};

export default Profile;
