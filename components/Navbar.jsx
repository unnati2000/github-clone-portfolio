import Image from "next/image";
import { AiFillGithub, AiOutlinePlus, AiFillCaretDown } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-[#161b22] py-3 px-6 text-gray-100 flex justify-between items-center">
      <div className="flex items-center">
        <AiFillGithub className="h-8 w-8 mr-4" />
        <input
          type="text"
          placeholder="Search or jump to..."
          className="bg-[#0d1117] border focus:w-80 transition-all rounded px-2 text-xs text-gray-100 w-64 h-6 border-gray-500 hidden md:block"
        />
        <div className="ml-4 hidden md:flex items-center text-sm font-semibold text-gray-100 space-x-4">
          <p>Pulls</p>
          <p>Issues</p>
          <p>Marketplace</p>
          <p>Explore</p>
        </div>
      </div>

      <div className="space-x-4 flex items-center">
        <BsBell className="h-4 w-4" />
        <div className="flex items-center">
          <AiOutlinePlus className="h-4 w-4 mr-1" />
          <AiFillCaretDown className="h-2 w-2" />
        </div>
        <div className="flex items-center">
          <Image
            src="https://github.com/unnati2000.png"
            height="22"
            width="22"
            className="rounded-full"
          />
          <AiFillCaretDown className="ml-1 h-2 w-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
