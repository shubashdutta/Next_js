"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const formhandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🎉");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl max-w-[900px] w-full">
      <h2 className="text-4xl font-bold text-orange-400 mb-4">Let's Connect</h2>
      <p className="text-white/70 mb-6">
        Send me a message and let's schedule a call!
      </p>

      <form onSubmit={formhandle} className="space-y-4 max-w-md mx-auto p-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
