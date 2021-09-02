import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex  items-center justify-evenly text-xs text-[#59A6FF] py-8">
      <p className="text-gray-500 text-xs">© 2021 GitHub, Inc.</p>
      <a href="">Terms</a>
      <a href="">Privacy</a>
      <a href="">Security</a>
      <a href="">Status</a>
      <a href="">Docs</a>

      <AiFillGithub className="text-2xl text-gray-600" />

      <a href="">Contact Github</a>
      <a href="">Pricing</a>
      <a href="">API</a>
      <a href="">Training</a>
      <a href="">Blog</a>
      <a href="">About</a>
    </div>
  );
};

export default Footer;
