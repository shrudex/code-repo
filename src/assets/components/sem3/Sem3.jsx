import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Labs from "../Labs";

("use client");

const Sem3 = () => {
  const labs = [
    {
      subject: "Data Structures",
      sub: "ds",
      lang: "C++",
    },
    {
      subject: "Object Oriented Programming",
      sub: "oops",
      lang: "Java",
    },
    {
      subject: "Data Analytics",
      sub: "ida",
      lang: "Python",
    },
  ];
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
        </Breadcrumb>
      </div>
      <div className="flex justify-evenly gap-16 mx-16 mt-36 mb-28 flex-wrap semester-list">
        {labs.map((l, index) => (
          <Labs key={index} sub={l.sub} subject={l.subject} lang={l.lang} />
        ))}
      </div>
    </div>
  );
};

export default Sem3;
