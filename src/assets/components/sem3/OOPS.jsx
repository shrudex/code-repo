import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import WeekCard from "../WeekCard";

const OOPS = () => {
  const weeks = [
    {
      num: "Week 01",
    },
    {
      num: "Week 02",
    },
    {
      num: "Week 03",
    },
    {
      num: "Week 04",
    },
    {
      num: "Week 05",
    },
    {
      num: "Week 06",
    },
    {
      num: "Week 07",
    },
    {
      num: "Week 08",
    },
    {
      num: "Week 09",
    },
    {
      num: "Week 10",
    },
  ];
  const n = "Object Oriented Programming";
  const sh = "oops";
  return (
    <div>
      <div className="items-center flex justify-center text-center explore-breadcrumb dark:text-white text-white">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 rounded-full dark:bg-gray-900 mt-1 text-white"
        >
          <Breadcrumb.Item href="/" icon={HiHome}>
            <p>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/sem3">Sem3</Breadcrumb.Item>
          <Breadcrumb.Item href="/oops">
            Object Oriented Programming
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="week-card">
        <WeekCard n={n} sh={sh} />
      </div>
    </div>
  );
};

export default OOPS;
