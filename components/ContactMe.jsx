import { SiGmail } from "react-icons/si";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCodepenCircle,
} from "react-icons/ai";

const ContactMe = () => {
  return (
    <div className="mt-4 p-4 bg-[#161b22] rounded">
      <h2 className="my-2 text-gray-500 text-2xl font-semibold">Contact Me</h2>
      <div className="grid grid-flow-col grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#0d1117] border focus:outline-none rounded text-sm py-2 px-2 border-gray-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#0d1117] border focus:outline-none  rounded text-sm py-2 px-2 border-gray-500"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="bg-[#0d1117] border focus:outline-none  w-full mt-3 rounded text-sm py-2 px-2 border-gray-500"
      />

      <textarea
        placeholder="Messge"
        className="bg-[#0d1117] border focus:outline-none  w-full mt-3 h-40 rounded text-sm py-2 px-2 border-gray-500"
      />
      <button className="bg-[#238636] w-full py-2 font-semibold text-sm text-center focus:outline-none mt-2 rounded">
        Submit
      </button>

      <div className="flex items-center justify-center my-5">
        <hr></hr>
        <h2 className="text-gray-400 font-semibold text-xl">
          Or Reach Me Out Via
        </h2>
        <hr></hr>
      </div>

      <div className="flex justify-center items-center mt-3 space-x-4 text-center">
        <SiGmail className="text-gray-500 text-3xl hover:text-gray-400 hover:text-4xl" />
        <AiFillGithub className="text-gray-500 text-3xl hover:text-gray-400 hover:text-4xl" />
        <AiOutlineInstagram className="text-gray-500 text-3xl hover:text-gray-400 hover:text-4xl" />
        <AiFillLinkedin className="text-gray-500 text-3xl hover:text-gray-400 hover:text-4xl" />
        <AiOutlineTwitter className="text-gray-500 text-3xl hover:text-gray-400 hover:text-4xl" />
        <AiFillCodepenCircle className="text-gray-500 text-3xl hover:text-gray-400 hover:text-4xl" />
      </div>
    </div>
  );
};

export default ContactMe;
