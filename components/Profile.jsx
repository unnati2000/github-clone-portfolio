import ProfileNavbar from "./ProfileNavbar";

const Profile = () => {
  return (
    <div>
      <ProfileNavbar />
      <section className="border p-3 rounded border-gray-700 my-6 ">
        <p className="text-gray-300 text-xs mt-4">
          unnati2000 / README.<span className="text-gray-500">md</span>
        </p>

        <h1 className="text-gray-300 font-semibold text-2xl mt-3">
          Hi there 👋, my name is Unnati Bamania
        </h1>

        <hr className="my-2 divide-gray-500" />

        <h1 className="text-gray-300 font-semibold text-lg mt-3">
          I am a MERN stack web developer
        </h1>
        <hr />

        <img
          className="mt-5"
          src="https://camo.githubusercontent.com/c86d31776e83df685864aff4654095c4ba36442211c9d7802a4884c194c7f804/68747470733a2f2f692e696d6775722e636f6d2f4149536b7745732e706e67"
        />
      </section>
    </div>
  );
};

export default Profile;
