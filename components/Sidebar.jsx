import Image from "next/image";
import { FiUsers, FiStar } from "react-icons/fi";
import Link from "next/link";

const Sidebar = ({ user }) => {
  return (
    <aside className="flex flex-col p-2">
      <Image
        src="https://github.com/unnati2000.png"
        height="250"
        width="250"
        className="rounded-full"
      />
      <h1 className="mt-4 text-2xl font-semibold text-gray-300">
        {user?.name}
      </h1>
      <Link href={user?.html_url}>
        <h4 className="text-gray-400 font-thin text-lg leading-4">
          {user?.login}
        </h4>
      </Link>
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
    </aside>
  );
};

export default Sidebar;
