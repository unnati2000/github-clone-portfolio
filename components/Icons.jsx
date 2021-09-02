import {
  DiReact,
  DiMongodb,
  DiNodejsSmall,
  DiPhp,
  DiPython,
  DiMysql,
  DiSass,
} from "react-icons/di";
import {
  SiFirebase,
  SiMaterialUi,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

const Icons = ({ tag }) => {
  return (
    <div>
      {tag === "react" && <DiReact className="text-blue-400 text-lg mr-1" />}
      {tag === "mongodb" && (
        <DiMongodb className="text-green-400 text-lg mr-1" />
      )}
      {tag === "node" && (
        <DiNodejsSmall className="text-green-400 text-lg mr-1" />
      )}
      {tag === "sass" && <DiSass className="text-pink-400 text-xl mr-1" />}
      {tag === "redux" && <SiRedux className="text-purple-400 text-md mr-1" />}
      {tag === "php" && <DiPhp className="text-purple-400 text-xl mr-1" />}
      {tag === "firebase" && (
        <SiFirebase className="text-yellow-400 text-lg mr-1" />
      )}
      {tag === "mysql" && <DiMysql className="text-blue-400 text-lg mr-1" />}
      {tag === "material-ui" && (
        <SiMaterialUi className="text-blue-500 text-lg mr-1" />
      )}
      {tag === "python" && <DiPython className="text-yellow-400 mr-1" />}
      {tag === "bootstrap" && (
        <BsFillBootstrapFill className="text-purple-700 mr-1" />
      )}
      {tag === "tailwind" && (className = "text-blue-300 mr-1")}
    </div>
  );
};

export default Icons;
