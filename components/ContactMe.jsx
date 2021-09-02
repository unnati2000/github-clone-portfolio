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
    </div>
  );
};

export default ContactMe;
