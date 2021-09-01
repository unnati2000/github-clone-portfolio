import Link from "next/link";
import { FiStar } from "react-icons/fi";

const Repositoty = () => {
  return (
    <section className="mt-4 border border-gray-900 text-gray-900">
      <div className="flex items-center mt-2">
        <input
          type="text"
          placeholder="Find a repository..."
          className="bg-[#0d1117] border rounded px-2 text-xs text-gray-600 w-64 h-6 border-gray-800 w-84 hidden md:block"
        />
      </div>
      <div className="p-3">
        <Link href="" className="font-xl">
          <p className="text-[#59A6FF] text-xl font-semibold">Real estate</p>
        </Link>
        <p className="text-gray-400 my-3 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit
          culpa, quo officiis modi iusto perspiciatis consequuntur, amet
          quisquam voluptatem dolores at possimus dolorum a doloribus? Sit sint
          incidunt quidem!
        </p>
        <div className="flex items-center mt-3 space-x-4">
          <div className="flex items-center">
            <div className="rounded-full h-2 w-2 text-red-200"></div>
            <p className="text-gray-300 text-xs">PHP</p>
          </div>
          <div className="flex items-center">
            <FiStar className="text-gray-400 h-4 w-4 mr-1" />
            <p className="text-gray-300 text-xs">2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositoty;
