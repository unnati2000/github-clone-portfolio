import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    });

    // Success if status code is 201
    if (res.status === 201) {
      toast("Thank you for contacting us!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <div className="mt-4 p-4 bg-[#161b22] rounded">
      <ToastContainer />
      <h2 className="my-2 text-gray-500 text-2xl font-semibold">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="grid grid-flow-col grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#0d1117] border focus:outline-none rounded text-sm py-2 px-2 border-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#0d1117] border focus:outline-none  rounded text-sm py-2 px-2 border-gray-500"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-[#0d1117] border focus:outline-none  w-full mt-3 rounded text-sm py-2 px-2 border-gray-500"
        />

        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#0d1117] border focus:outline-none  w-full mt-3 h-40 rounded text-sm py-2 px-2 border-gray-500"
        />
        <button
          type="submit"
          className="bg-[#238636] w-full py-2 font-semibold text-sm text-center focus:outline-none mt-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
