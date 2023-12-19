import React from "react";
import { NavLink } from "react-router-dom";
const Labs = ({ sub, subject, lang }) => {
  const link = `/${sub}`;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow !bg-gray-800 !border-gray-700 flex justify-center items-center">
      <div className="p-5">
        <NavLink to={link}>
          <h5 className="heading mb-2 text-2xl font-medium text-center tracking-tight text-gray-900 !text-white">
            {subject}
          </h5>
        </NavLink>
        <p className="mb-3 text-center font-normal text-gray-700 !text-gray-400">
          <mark className="px-2 text-black bg-blue-600 rounded-lg !bg-yellow-300">
            {lang}
          </mark>
        </p>
        <div className="read-more flex justify-center">
          <NavLink
            to={link}
            className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 !bg-blue-600 !hover:bg-blue-700 !focus:ring-blue-800"
          >
            Check more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Labs;
