import React from "react";
import { NavLink } from "react-router-dom";

const SemCard = ({ img, sem, l1, l2, l3 }) => {
  const src = `/sem${sem}`;
  return (
    <div>
      <NavLink
        to={src}
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 !bg-gray-800 !border-gray-700 !hover:bg-gray-700"
      >
        <h5 className="heading mb-2 text-center text-2xl font-normal tracking-tight text-gray-900 !text-white">
          Semester{" "}
          <mark className="px-2 text-white bg-blue-600 rounded !bg-blue-500">
            {sem}
          </mark>
        </h5>
        <p className=" text font-normal text-center text-gray-700 !text-gray-300">
          {l1}
        </p>
        <p className="text font-normal text-center text-gray-700 !text-blue-400">
          {l2}
        </p>
        <p className="text font-normal text-center text-gray-700 !text-gray-300">
          {l3}
        </p>
      </NavLink>
    </div>
  );
};

export default SemCard;
