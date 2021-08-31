import Image from "next/image";
import { FiUsers, FiStar } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="flex flex-col p-2">
      <Image
        src="https://github.com/unnati2000.png"
        height="250"
        width="250"
        className="rounded-full"
      />
      <h1 className="mt-4 text-2xl font-semibold text-gray-300">
        Unnati Bamania
      </h1>
      <h4 className="text-gray-400 font-thin text-lg leading-4">unnati2000</h4>
      <p className="mt-4 text-gray-300 text-sm">
        working in progress. Breaking down shaping up.
      </p>

      <div className="mt-4 flex items-center">
        <FiUsers className="text-gray-400 h-3 w-3 mr-1" />
        <p className="text-gray-500 text-xs">
          <span className="text-gray-200">24</span> followers
        </p>
        <p className="text-gray-200 text-xs mx-1">&bull;</p>
        <p className="text-gray-500 text-xs">
          <span className="text-gray-200">15</span> following
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
