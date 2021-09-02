const Profile = ({ user }) => {
  return (
    <div>
      <section className="border p-3 rounded border-gray-700 my-6 ">
        <p className="text-gray-300 text-xs mt-4">
          unnati2000 / README.<span className="text-gray-500">md</span>
        </p>

        <h1 className="text-gray-300 font-semibold text-2xl mt-3">
          Hi 🙏, my name is Unnati Bamania
        </h1>
        <div className="border-b mt-2 border-gray-900"></div>
        <h1 className="text-gray-300  text-xs mt-3">
          I'm a budding engineer specializing in Computer Science 👩‍💻 and also a
          full-stack web developer with hands-on experience in the MERN stack.
        </h1>
        <div className="border-b mt-2 border-gray-900"></div>
        <img
          className="mt-5"
          src="https://camo.githubusercontent.com/c86d31776e83df685864aff4654095c4ba36442211c9d7802a4884c194c7f804/68747470733a2f2f692e696d6775722e636f6d2f4149536b7745732e706e67"
        />

        <p className="flex justify-center items-center  mt-3">
          <a href="mailto:unnatibamania8@gmail.com" target="_blank">
            <img
              height="25"
              src="https://img.shields.io/badge/gmail-c14438?&style=for-the-badge&logo=gmail&logoColor=white"
            />
          </a>
          <a href="https://linkedin.com/in/unnatibamania" target="_blank">
            <img
              height="25"
              src="https://img.shields.io/badge/-LinkedIn-0e76a8?style=for-the-badge&logo=Linkedin&logoColor=white"
            />
          </a>
          <a href="https://unnati2000.github.io" target="_blank">
            <img
              height="25"
              src="https://img.shields.io/badge/Website-3b5998?style=for-the-badge&logo=google-chrome&logoColor=white"
            />
          </a>
          <a href="https://twitter.com/bamania_unnati" target="_blank">
            <img
              height="25"
              src="https://img.shields.io/badge/-Twitter-00acee?style=for-the-badge&logo=Twitter&logoColor=white"
            />
          </a>
          <a href="https://dev.to/commentme" target="_blank">
            <img
              height="27"
              src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev.to&logoColor=white"
            />
          </a>
        </p>

        <h2 className="mt-2 text-xl font-semibold text-gray-300">
          My tech stack
        </h2>
        <div className="flex flex-wrap justify-left items-center mt-3">
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
          <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" />
          <img src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" />
          <img src="https://img.shields.io/badge/-Bulma-00D1B2?style=flat-square&logo=bulma&logoColor=white" />
          <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
          <img src="https://img.shields.io/badge/-MaterialUI-0081CB?style=flat-square&logo=material-ui" />
          <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
          <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white" />
          <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />
          <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js" />
          <img src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux" />
          <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
          <img src="https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white" />
          <img src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white" />
          <img src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" />
          <img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" />
          <img src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku" />
          <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" />
          <img src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
          <img src="https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />
        </div>

        <h2 className="mt-2 text-xl font-semibold text-gray-300">
          Technologies I want to explore
        </h2>
        <div className="flex flex-wrap justify-left items-center mt-3">
          <img src="https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white" />
          <img src="https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" />
          <img src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws" />
          <img src="https://img.shields.io/badge/-ReactNative-61DAFB?style=flat-square&logo=react&logoColor=black" />
        </div>

        <img
          className="mt-3"
          src="https://github-readme-stats.vercel.app/api?username=unnati2000&&show_icons=true&title_color=ffffff&icon_color=bb2acf&text_color=daf7dc&bg_color=151515"
        />
      </section>
    </div>
  );
};

export default Profile;
