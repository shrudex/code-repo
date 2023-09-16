import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-white shadow dark:bg-gray-900 relative top-8 w-full h-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to="/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="./think.png"
              className="h-8 mr-3"
              alt="CodeRepo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeRepo
            </span>
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.linkedin.com/in/codeshubh/" target="_blank" className="mr-4 hover:underline md:mr-6">
                LinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/shrudex" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink to="https://leetcode.com/shrudex/" target="_blank" className="hover:underline">
                LeetCode
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Shubh Sinha™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
