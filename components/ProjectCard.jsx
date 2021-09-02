import Link from "next/link";
import {
  DiReact,
  DiMongodb,
  DiNodejsSmall,
  DiPhp,
  DiMysql,
} from "react-icons/di";
import { SiFirebase, SiMaterialUi } from "react-icons/si";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-700 rounded" key={project?.id}>
      <img src="https://camo.githubusercontent.com/83ccac176db65fa055bc9683382675277fc95f5d368a1f899295e4b0da109806/68747470733a2f2f696d6775722e636f6d2f50395855656c462e706e67" />
      <h2 className="text-gray-300 font-semibold text-xl px-2 py-2">
        {project?.name}
      </h2>
      <p className="text-gray-600 text-xs px-2">{project?.description}</p>

      <div className="flex items-center px-2 py-2">
        <DiReact className="text-blue-400 text-lg" />
        <DiMongodb className="text-green-400 text-lg" />
        <DiNodejsSmall className="text-green-400 text-lg" />
        <DiPhp className="text-purple-400 text-xl" />
        <SiFirebase className="text-yellow-400 text-lg" />
        <DiMysql className="text-blue-400 text-lg" />
        <SiMaterialUi className="text-blue-500 text-lg" />
      </div>
      <div className="flex items-center justify-between m-3">
        <Link href={project?.source}>
          <button className="bg-[#238636] px-4 rounded py-1 text-xs">
            Source
          </button>
        </Link>
        <Link href={project?.live}>
          <button className="bg-gray-800 px-6 rounded py-1 text-xs">
            Live
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
