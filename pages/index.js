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
import { getProjects } from "../pages/api/project";
import Articles from "../components/Articles";
import { SiWriteDotAs } from "react-icons/si";
import Footer from "../components/Footer";

const HomePage = ({ user, repo, projects, articles }) => {
  const [tab, setTab] = useState("profile");

  return (
    <div className="bg-[#0d1117] min-h-screen">
      <Navbar />
      <div className="container md:flex-nowrap text-gray-100 mx-auto py-10 flex flex-wrap">
        <div className="md:w-1/4 w-100">
          <Sidebar user={user} />
        </div>
        <div className="md:3/4 w-100 px-2 md:overflow-hidden">
          <nav className="flex lg:space-x-6 md:space-x-3 sm:space-x-1 items-center">
            <div>
              <button
                onClick={() => setTab("profile")}
                className="flex items-center px-1 text-gray-300 text-sm"
              >
                <BsBook className="mr-2 text-gray-600" />
                <p className={tab === "profile" && "font-semibold"}>Overview</p>
              </button>

              <div
                className={
                  tab === "profile"
                    ? "border-b-2 w-100 border-[#f78166] mt-2"
                    : "border-b-2 w-100 border-transparent mt-2"
                }
              ></div>
            </div>
            <div>
              <button
                onClick={() => setTab("repositories")}
                className="flex items-center px-1 text-gray-300 text-sm"
              >
                <RiBookMarkFill className="mr-2 text-gray-600" />
                <p className="text-sm">
                  Repositories
                  <span className="inline-flex items-center justify-center px-2 py-1 ml-1 mr-2 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full">
                    {user?.public_repos}
                  </span>
                </p>
              </button>
              <div
                className={
                  tab === "repositories"
                    ? "border-b-2 w-100 border-[#f78166] mt-2"
                    : "border-b-2 w-100 border-transparent mt-2"
                }
              ></div>
            </div>

            <div>
              <button
                onClick={() => setTab("projects")}
                className="flex items-center px-1 text-gray-300 text-sm"
              >
                <AiOutlineProject className="mr-2 text-gray-600" />
                <p className="text-sm">Projects</p>
              </button>
              <div
                className={
                  tab === "projects"
                    ? "border-b-2 w-100 border-[#f78166] mt-2"
                    : "border-b-2 w-100 border-transparent mt-2"
                }
              ></div>
            </div>
            <div>
              <button
                onClick={() => setTab("articles")}
                className="flex items-center text-gray-300 px-1 text-sm"
              >
                <SiWriteDotAs className="mr-2 text-gray-600" />
                <p className="text-sm">Articles</p>
              </button>
              <div
                className={
                  tab === "articles"
                    ? "border-b-2 w-100 border-[#f78166] mt-2"
                    : "border-b-2 w-100 border-transparent mt-2"
                }
              ></div>
            </div>

            <div>
              <button
                onClick={() => setTab("contact-me")}
                className="flex justify-center items-center px-1 text-gray-300 text-sm"
              >
                <AiOutlineMail className="mr-2 text-gray-600" />
                <p className="text-sm">Contact Me</p>
              </button>
              <div
                className={
                  tab === "contact-me"
                    ? "border-b-2 w-100 border-[#f78166] mt-2"
                    : "border-b-2 w-100 border-transparent mt-2"
                }
              ></div>
            </div>
          </nav>

          {tab === "profile" && <Profile user={user} />}
          {tab === "repositories" && <Repositoty repo={repo} />}
          {tab === "projects" && <Project projects={projects} />}
          {tab === "articles" && <Articles articles={articles} />}
          {tab === "contact-me" && <ContactMe />}
        </div>
      </div>
      <div className="border-b border-gray-700"></div>
      <Footer />
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

  const projects = await getProjects();

  const articleRes = await fetch(
    "https://dev.to/api/articles?username=commentme"
  );
  const articles = await articleRes.json();

  return {
    props: { user, repo, projects, articles },
  };
}
export default HomePage;
