import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="border h-100 border-gray-700 rounded" key={project?.id}>
      <Image src={project?.image} width="500" height="300" />
      <h2 className="text-gray-300 font-semibold text-xl px-2 py-2 sm:text-lg">
        {project?.name}
      </h2>
      <p className="text-gray-600 text-sm px-2">{project?.description}</p>

      <div className="flex items-center px-2 py-2">
        {project?.tags?.map((tag) => (
          <Icons tag={tag} />
        ))}
      </div>
      <div className="flex justify-between items-center m-3">
        <Link href={project?.source}>
          <button className="bg-[#238636] px-4 mr-2  rounded py-1 text-sm">
            Source
          </button>
        </Link>
        <Link href={project?.live}>
          <button className="bg-gray-800 px-6  rounded py-1 text-sm">
            Live
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
