"use client";

import { Card } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function WeekCard({ n, sh, questions }) {
  const urls = [
    `/${sh}/w1`,
    `/${sh}/w2`,
    `/${sh}/w3`,
    `/${sh}/w4`,
    `/${sh}/w5`,
    `/${sh}/w6`,
    `/${sh}/w7`,
    `/${sh}/w8`,
    `/${sh}/w9`,
    `/${sh}/w10`,
    `/${sh}/w11`,
  ];
  console.log(urls);

  return (
    <div className="week-card px-6 mt-3">
      <p className=" w-full text-center py-1 px-6 mb-4 heading rounded-xl bg-gray-900">
        <span className="text-transparent text-xl bg-clip-text bg-gradient-to-r to-white from-sky-400">
          {n}
        </span>
      </p>
      <div className="list-group-weeks h-fit flex-col flex ">
        <div className="week-div flex justify-around mb-2 sm:w-full">
          <NavLink
            to={urls[0]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣1️⃣</p>
            <span className="w-full text-white">Week 01</span>
            <svg
              className="w-4 h-4 ml-2"
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

        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[1]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣2️⃣</p>
            <span className="w-full text-white">Week 02</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[2]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣3️⃣</p>
            <span className="w-full text-white">Week 03</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[3]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣4️⃣</p>
            <span className="w-full text-white">Week 04</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[4]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣5️⃣</p>
            <span className="w-full text-white">Week 05</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[5]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣6️⃣</p>
            <span className="w-full text-white">Week 06</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[6]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣7️⃣</p>
            <span className="w-full text-white">Week 07</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[7]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣8️⃣</p>
            <span className="w-full text-white">Week 08</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[8]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>0️⃣9️⃣</p>
            <span className="w-full text-white">Week 09</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around mb-2">
          <NavLink
            to={urls[9]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>1️⃣0️⃣</p>
            <span className="w-full text-white">Week 10</span>
            <svg
              className="w-4 h-4 ml-2"
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
        <div className="week-div flex justify-around -mb-3">
          <NavLink
            to={urls[10]}
            className="inline-flex h-auto items-center w-3/12 justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <p>1️⃣1️⃣</p>
            <span className="w-full text-white">Week 11</span>
            <svg
              className="w-4 h-4 ml-2"
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
}
