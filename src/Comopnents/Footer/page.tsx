import React from "react";

const Footerpage = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-4">MyPortfolio</h2>
          <p className="text-sm opacity-80">
            Building beautiful web experiences with Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#project " className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>

          <div className="flex items-center gap-6 justify-center md:justify-start">
            {/* GitHub */}
            <a
              href="https://github.com/shubashdutta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.1 3.29 9.43 7.85 10.96.58.1.79-.25.79-.56v-2c-3.18.7-3.85-1.37-3.85-1.37-.53-1.37-1.3-1.73-1.3-1.73-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.1-.76.4-1.28.72-1.57-2.54-.29-5.2-1.27-5.2-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.2 1.18a11.2 11.2 0 0 1 5.83 0c2.23-1.49 3.2-1.18 3.2-1.18.63 1.57.24 2.73.12 3.02.75.8 1.2 1.82 1.2 3.07 0 4.38-2.67 5.34-5.22 5.63.42.36.78 1.08.78 2.18v3.24c0 .31.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shubash-dutta-98a843271/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.5S3.33 9.5 4.98 9.5c1.65 0 2.98-1.34 2.98-3S6.63 3.5 4.98 3.5zM2.4 21.5h5.17V9.95H2.4V21.5zM9.91 9.95v11.55h5.17v-6.45c0-1.54.55-2.6 1.92-2.6 1.38 0 1.56 1.6 1.56 2.7v6.35h5.17V14.5c0-4.06-2.17-5.95-5.07-5.95-2.34 0-3.38 1.31-3.95 2.23h-.07v-1.83H9.91z" />
              </svg>
            </a>

            {/* Download CV icon only */}
            {/* <a
              href="/Shubash_Dutta_CV.pdf"
              download
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
              aria-label="Download CV"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 14.5a1 1 0 011-1h3v-6a1 1 0 112 0v6h3a1 1 0 011 1v.586l-4 4-4-4V14.5zM4 3a1 1 0 000 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 opacity-70">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footerpage;
