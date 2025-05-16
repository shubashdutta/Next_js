import React from "react";
import { BiPhone } from "react-icons/bi";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div
      id="contact"
      className="max-w-full text-white p-8 bg-gray-900 min-h-screen"
    >
      <div className="mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 max-w-[1000px]">
        <div className="flex justify-center items-center">
          <ul className="space-y-4">
            <li className="flex items-center">
              <BiPhone className="h-[40px] w-auto mr-4" />
              <a href="tel:+9779816371621">
                <p className="text-xl text-white">+977 9816371621</p>
              </a>
            </li>

            <li className="flex items-center">
              <LiaLinkedin className="h-[40px] w-auto mr-4" />
              <a
                href="https://www.linkedin.com/in/shubash-dutta-98a843271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-xl text-white">shubash-dutta</p>
              </a>
            </li>

            <li className="flex items-center">
              <MdEmail className="h-[40px] w-auto mr-4" />
              <a href="mailto:subashdutta6@gmail.com">
                <p className="text-xl text-white">subashdutta6@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
