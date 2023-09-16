import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="pb-3">
      <div>
        <h1 className="heading mt-16 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center dark:text-gray-900">
          CodeRepo
        </h1>
        <p className="sub-heading mb-6 text-lg font-normal text-blue-800 lg:text-xl sm:px-16 xl:px-48 dark:text-blue-800 text-center">
          Your Comprehensive{" "}
          <mark className="px-2 text-white bg-gray-900 rounded dark:bg-gray-900">
            DSE Branch
          </mark>{" "}
          LAB Program Code Repository.
        </p>
        <div className="text-center justify-center items-center">
          <NavLink
            to="/explore"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Explore Repository
          </NavLink>
        </div>
      </div>

      <div className=" search-code w-8/12 justify-center mx-auto mt-10 mb-20 sm:mb-24">
        <label
          htmlFor="helper-text"
          className="block mb-2 text-sm font-bold text-black dark:text-black text-center"
        >
          Search your question
        </label>
        <input 
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="sub-heading text-center font-bold bg-blue-800 border border-gray-300 text-blue-800 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white dark:border-black dark:placeholder-red-300 dark:blue-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Implement a function to find the maximum element in an array using an efficient algorithm."
        />
        <p
          id="helper-text-explanation"
          className="gray-text mt-2 text-sm sub-text font-medium text-center"
        >
          Streamline Your Learning with Easy Access to DSE LAB Program Codes.
        </p>
      </div>
    </div>
  );
};

export default Home;
