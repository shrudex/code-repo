import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import WeekCard from "../WeekCard";

const DBS = () => {
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

  const n = "Database Systems";
  const sh = "dbs";
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
          <Breadcrumb.Item href="/sem4">Sem4</Breadcrumb.Item>
          <Breadcrumb.Item href="/dbs">{n}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <WeekCard n={n} sh={sh} />
    </div>
  );
};

export default DBS;
