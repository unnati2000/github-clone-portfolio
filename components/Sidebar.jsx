import Image from "next/image";
import { FiUsers, FiStar } from "react-icons/fi";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCodepenCircle,
} from "react-icons/ai";

const Sidebar = ({ user }) => {
  return (
    <aside className="flex flex-col p-2">
      <div className="md:block flex justify-between items-center px-2">
        <Image
          src="https://github.com/unnati2000.png"
          height="250"
          width="250"
          className="rounded-full"
        />
        <div className="px-2">
          <h1 className="mt-4 text-2xl font-semibold text-gray-300">
            {user?.name}
          </h1>
          <Link href={user?.html_url}>
            <h4 className="text-gray-400 font-thin text-lg leading-4">
              {user?.login}
            </h4>
          </Link>
        </div>
      </div>

      <p className="mt-4 text-gray-300 text-sm">{user?.bio}</p>

      <div className="mt-4 flex items-center">
        <FiUsers className="text-gray-400 h-3 w-3 mr-1" />
        <p className="text-gray-500 text-xs">
          <span className="text-gray-200">{user?.followers}</span> followers
        </p>
        <p className="text-gray-200 text-xs mx-1">&bull;</p>
        <p className="text-gray-500 text-xs">
          <span className="text-gray-200">{user?.following}</span> following
        </p>
        <p className="text-gray-200 text-xs mx-1">&bull;</p>
        <FiStar className="text-gray-400 h-3 w-3 mr-1" />
        <p className="text-gray-500 text-xs">
          <span className="text-gray-200">2</span>
        </p>
      </div>

      <div className="border-b border-gray-600 mt-3"></div>

      <div className="mt-4">
        <h2 className="text-gray-400 font-semibold text-lg mb-3">
          Reach Out Via
        </h2>
        <div className="flex items-center my-2">
          <SiGmail className="text-gray-500 text-xl " />
          <a
            href="mailto:unnatibamania8@gmail.com"
            className="text-gray-500 ml-2 text-sm"
          >
            unnatibamania8@gmail.com
          </a>
        </div>
        <div className="flex items-center my-2">
          <AiOutlineInstagram className="text-gray-500 text-xl" />
          <a
            href="https://www.instagram.com/unnatibamania/"
            className="text-gray-500 ml-2 text-sm"
          >
            unnatibamania
          </a>
        </div>

        <div className="flex items-center my-2">
          <AiFillLinkedin className="text-gray-500 text-xl" />

          <a
            href="https://www.linkedin.com/in/unnatibamania/"
            className="text-gray-500 ml-2 text-sm"
          >
            unnatibamania
          </a>
        </div>

        <div className="flex text-center items-center my-2">
          <AiOutlineTwitter className="text-gray-500 text-xl" />

          <a
            href="https://twitter.com/bamania_unnati"
            className="text-gray-500 ml-2 text-sm"
          >
            bamania_unnati
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
