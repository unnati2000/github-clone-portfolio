import Link from "next/link";
import { FiStar } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

const Repositoty = ({ repo }) => {
  return (
    <section className="mt-4 border border-gray-900 text-gray-900">
      {console.log(repo)}
      <div className="flex items-center mt-2">
        <input
          type="text"
          placeholder="Find a repository..."
          className="bg-[#0d1117] border rounded m-2 px-2 text-xs text-gray-600 w-64 h-6 border-gray-800 w-84 hidden md:block"
        />
      </div>
      {repo?.map((data) => (
        <div className="p-3" key={data?.id}>
          <Link href={data?.svn_url} className="font-xl">
            <p className="text-[#59A6FF] text-xl font-semibold">{data?.name}</p>
          </Link>
          <p className="text-gray-400 my-3 text-sm">{data?.description}</p>
          <div className="flex items-center mt-3 space-x-4">
            <div className="flex items-center">
              <div className="rounded-full h-2 w-2 text-red-200"></div>
              <p className="text-gray-300 text-sm">{data?.language}</p>
            </div>
            <div className="flex items-center">
              <FiStar className="text-gray-400 h-4 w-4 mr-1" />
              <p className="text-gray-300 text-sm">{data?.stargazers_count}</p>
            </div>
            <div className="flex items-center">
              <AiOutlineEye className="text-gray-400 h-4 w-4 mr-1" />
              <p className="text-gray-300 text-sm">{data?.watchers_count}</p>
            </div>
          </div>
          <div className="border-b mt-2 border-gray-800"></div>
        </div>
      ))}
    </section>
  );
};

export default Repositoty;
