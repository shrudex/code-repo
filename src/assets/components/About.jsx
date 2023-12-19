"use client";

import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const About = () => {
  return (
    <div className="px-4 mb-8 pt-0.5">
      <div className="items-center flex justify-center text-center about-breadcrumb !text-white text-white">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 rounded-full !bg-gray-900 mt-1 text-white"
        >
          <Breadcrumb.Item href="/" icon={HiHome}>
            <p>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="about-quote mt-3 mb-5 ">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 !text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 !text-gray-900">
              "CodeRepo is your hub for DSE{" "}
              <mark className="px-2 text-white bg-blue-600 !bg-blue-400 rounded-2xl">
                (Data Science and Engineering)
              </mark>{" "}
              LAB program codes. Easily find and contribute to a comprehensive
              collection of codes, fostering collaboration and supporting your
              coursework and research needs."
            </p>
          </blockquote>
        </figure>
      </div>
      <div className="flex justify-center mb-1 items-center about-card">
        <a
          href="https://github.com/shrudex"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 !border-gray-700 !bg-gray-800 !hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="./shubh-sinha.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal hover:shadow-outline">
            <h5 className="mb-2 text-2xl font-medium text-center tracking-tight text-gray-900 !text-white heading">
              Shubh Sinha
            </h5>
            <p className="mb-3 font-normal text-gray-700 !text-gray-400 sub-text text-center">
              3rd year Undergraduate at MIT, Manipal. <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-500">
                DSA | React.js | Data Science
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
