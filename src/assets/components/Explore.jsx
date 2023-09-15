"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import axios from "axios";
import { useState, useEffect } from "react";
import SemCard from "./SemCard";
const Explore = () => {
  //GitHub Personal Access Token
  const accessToken =
    "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";

  //GitHub API endpoint for the repository
  const apiUrl = "https://api.github.com/repos/shrudex/DSE";

  axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      const repoData = response.data;
      console.log("Repository Data:", repoData);
    })
    .catch((error) => {
      console.error("Error fetching repository data:", error);
    });

  // Folders  access
  const folders = [
    "DAA Lab",
    "DL Lab",
    "Data Analytics",
    "Data Structures",
    "Database Lab",
    "ML Lab",
    "OOPS",
    "OS Lab",
    "WT Lab",
  ]; // folder names here

  const subjects = [
    {
      semester: "3",
      lab1: "Data Structures",
      lab2: "Object Oriented Programming",
      lab3: "Data Analytics",
    },
    
    {
      semester: "4",
      lab1: "Database Systems",
      lab2: "Design & Analysis of Algorithms",
      lab3: "Machine Learning",
    },
    {
      semester: "5",
      lab1: "Deep Learning",
      lab2: "Operating Systems",
      lab3: "Web Technologies",
    },
  ];
  return (
    <div className="h-auto bg-red-">
      <div className="items-center flex justify-center text-center h-max explore-breadcrumb dark:text-white text-white">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 rounded-full dark:bg-gray-900 mt-1 text-white"
        >
          <Breadcrumb.Item href="/" icon={HiHome}>
            <p>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="flex justify-evenly gap-16 mx-16 mt-36 mb-28 flex-wrap semester-list">
        {subjects.map((subject, index) => (
          <SemCard
            key={index}
            sem={subject.semester}
            l1={subject.lab1}
            l2={subject.lab2}
            l3={subject.lab3}
            img={subject.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
