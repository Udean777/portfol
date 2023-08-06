"use client";
import React, { useState } from "react";

function ContactMe() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, message }),
    });

    const { mssg, success } = await res.json();
    setError(mssg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="pt-52 pb-20">
      <div className="m-auto py-5 md:py-10 lg:py-10 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown text-stone-800 dark:text-stone-200 overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          CONTACT ME!
        </h1>
        <div className="backdrop-blur-md bg-blue-700/10 dark:bg-blue-900/10 dark:text-slate-50 px-10 py-10 rounded-lg">
          <div>
            <h3 className="text-xl font-bold">
              Give me your message for me, or critics about my website
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-4 mt-4 border-t flex flex-col gap-5"
          >
            <div>
              <label htmlFor="fullname">Full name :</label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text"
                id="fullname"
                placeholder="Udean Ganteng"
              />
            </div>

            <div>
              <label htmlFor="email">Email :</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="udean@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message">Input your message :</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="bg-blue-700/70 hover:bg-blue-500 transition ease-in-out rounded-lg">
              <button className="p-3 text-white font-bold z-10" type="submit">
                Send
              </button>
            </div>
          </form>

          <div className="bg-slate-100 flex flex-col rounded-lg">
            {error &&
              error.map((e) => (
                <div
                  className={`${
                    success ? "text-green-600" : "text-red-600"
                  } px-5 py-2`}
                >
                  {e}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
