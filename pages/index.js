import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Repositoty from "../components/Repositoty";
import ContactMe from "../components/ContactMe";
import { BsBook } from "react-icons/bs";
import { RiBookMarkFill } from "react-icons/ri";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";

const HomePage = ({ user, repo }) => {
  const [tab, setTab] = useState("profile");

  console.log(user);
  return (
    <div className="bg-[#0d1117] h-screen">
      <Navbar />
      <div className="container text-gray-100 mx-auto py-10 flex max-h-96">
        <div className="w-1/4">
          <Sidebar user={user} />
        </div>
        <div className="w-3/4 ml-6">
          <nav className="flex space-x-6 items-center">
            <button
              onClick={() => setTab("profile")}
              className="flex items-center text-gray-300 text-sm"
            >
              <BsBook className="mr-2 text-gray-600" />
              <p
                className={
                  tab === "profile"
                    ? "divide-y divide-gray-100 md:divide-y-8"
                    : "text-sm hover:border-b border-[#f78166]"
                }
              >
                Overview
              </p>
            </button>
            <button
              onClick={() => setTab("repositories")}
              className="flex items-center text-gray-300 text-sm"
            >
              <RiBookMarkFill className="mr-2 text-gray-600" />
              <p className="text-sm">
                Repositories
                <span className="inline-flex items-center justify-center px-2 py-1 ml-1 mr-2 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full">
                  {user?.public_repos}
                </span>
              </p>
            </button>
            <button
              onClick={() => setTab("projects")}
              className="flex items-center text-gray-300 text-sm"
            >
              <AiOutlineProject className="mr-2 text-gray-600" />
              <p className="text-sm">Projects</p>
            </button>
            <button
              onClick={() => setTab("contact-me")}
              className="flex items-center text-gray-300 text-sm"
            >
              <AiOutlineMail className="mr-2 text-gray-600" />
              <p className="text-sm">Contact Me</p>
            </button>
          </nav>

          {tab === "profile" && <Profile user={user} />}
          {tab === "repositories" && <Repositoty repo={repo} />}
          {tab === "projects" && <Project />}
          {tab === "contact-me" && <ContactMe />}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(`https://api.github.com/users/unnati2000`);
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/unnati2000/repos?sort=created_at&per_page=10`
  );
  const repo = await repoRes.json();

  return {
    props: { user, repo },
  };
}
export default HomePage;
