import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { Accordion } from "flowbite-react";
("use client");
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const DsWeek02 = () => {
  const qq = {
    week: "02",
    ques: [
      "Column Matrix",
      "Diagonal Matrix",
      "Lower Triangular Matrix",
      "Row Major",
      "Sparse Matrix",
      "Tri Diagonal Matrix",
      "Upper Triangular Matrix",
    ],
    desc: [" ", " ", " ", " "],
    links: [
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FColumn-Matrix.cpp/raw?ref=main",
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FDiagonalMatrix.cpp/raw?ref=main",
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FLowerTriangularMatrix.cpp/raw?ref=main",
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FRow-Major.cpp/raw?ref=main",
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FSparseMatrix.cpp/raw?ref=main",
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FTri-DiagonalMatrix.cpp/raw?ref=main",
      "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2002%2FUpperTriangularMatrix.cpp/raw?ref=main",
    ],
    id: [
      "DS-L2-Q1",
      "DS-L2-Q2",
      "DS-L2-Q3",
      "DS-L2-Q4",
      "DS-L2-Q5",
      "DS-L2-Q6",
      "DS-L2-Q7",
    ],
  };

  const [fileContents, setFileContents] = useState([]);
  const [openPanelIndex, setOpenPanelIndex] = useState(-1); // Initially set to -1 to have no panel open by default

  useEffect(() => {
    const fetchFiles = async () => {
      const filePromises = qq.links.map(async (link) => {
        try {
          const response = await fetch(link);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.text();
          return data;
        } catch (error) {
          console.error("Error fetching data:", error);
          return ""; // Return an empty string if there's an error
        }
      });

      const fileData = await Promise.all(filePromises);
      setFileContents(fileData);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <div className="items-center flex justify-center text-center explore-breadcrumb !text-white text-white">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 rounded-full !bg-gray-900 mt-1 text-white"
        >
          <Breadcrumb.Item href="/" icon={HiHome}>
            <p>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/sem3">Sem3</Breadcrumb.Item>
          <Breadcrumb.Item href="/ds">Data Structures</Breadcrumb.Item>
          <Breadcrumb.Item href="/ds/w2">Week 02</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="accordion-div mt-32 mb-32">
        <Accordion className="bg-transparent flex flex-col justify-center items-center border-none gap-5 flex-wrap">
          {qq.ques.map((question, index) => (
            <Accordion.Panel
              className="flex flex-col justify-center items-center px-10 "
              key={qq.id[index]}
              isOpen={index === openPanelIndex}
              onToggle={() => setOpenPanelIndex(index)} // Handle panel toggle
            >
              <div className="accordion-panel w-3/4 justify-center bg-transparent">
                <Accordion.Title className="bg-gray-900 text-lg text-white h-12 py-2 rounded-xl w-full text-center hover:bg-blue-800 hover:text-white hover:font-medium hover:text-xl">
                  {question}
                </Accordion.Title>

                <Accordion.Content className="rounded-xl  !bg-transparent">
                  <pre className="code overflow-x-auto scrolling-touch">
                    {" "}
                    <code className="mb-2 text-black !text-black bg-transparent max-w-md ht-text select-text">
                      {fileContents[index]}
                    </code>
                  </pre>
                  <p className="text-gray-500 !text-black text-base ">
                    <p>
                      Check out complete code in a new tab&nbsp;
                      <a
                        className="text-cyan-600 hover:underline !text-blue-600 font-medium"
                        href={qq.links[index]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        by clicking here
                      </a>
                    </p>
                  </p>
                </Accordion.Content>
              </div>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default DsWeek02;
