import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import WeekCard from "../WeekCard";

const OOPS = () => {
  const questions = [
    {
      week: "01",
      ques: [
        "Greatest Number",
        "Registration Number",
        "Retirement Date",
        "Taxi Service",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FGreatestNumber.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FRegistrationNumber.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FRetirementDate.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FTaxiService.java/raw?ref=main",
      ],
      id: ["OOPS-L1-Q1", "OOPS-L1-Q2", "OOPS-L1-Q3", "OOPS-L1-Q4"],
    },
    {
      week: "02",
      ques: [
        "Bitwise Addition",
        "Conversion Data Type",
        "Conversion Int Double Char Byte",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FBitwiseAddition.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FConversionDataType.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FConversionIntDoubleCharByte.java/raw?ref=main",
      ],
      id: ["OOPS-L2-Q1", "OOPS-L2-Q2", "OOPS-L2-Q3"],
    },
    {
      week: "03",
      ques: ["Area Of Rectangle", "Day Of Date", "Prime Number", "Voting"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FAreaOfRectangle.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FDayOfDate.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FPrimeNumber.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FVoting.java/raw?ref=main",
      ],
      id: ["OOPS-L3-Q1", "OOPS-L3-Q2", "OOPS-L3-Q3", "OOPS-L3-Q4"],
    },
    {
      week: "04",
      ques: ["Matrix Multiplication", "Odd Even Sum", "Sum Of Array"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FMatrixMultiplication.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FOddEvenSum.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FSumOfArray.java/raw?ref=main",
      ],
      id: ["OOPS-L4-Q1", "OOPS-L4-Q2", "OOPS-L4-Q3"],
    },
    {
      week: "05",
      ques: ["Array Of Integers", "Post Office"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FArrayOfIntegers.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FPostOffice.java/raw?ref=main",
      ],
      id: ["OOPS-L5-Q1", "OOPS-L5-Q2"],
    },
    {
      week: "06",
      ques: [
        "Book Class Program",
        "Menu Driven Strings",
        "Student Class Program",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FBookClassProgram.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FMenuDrivenStrings.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FStudentClassProgram.java/raw?ref=main",
      ],
      id: ["OOPS-L6-Q1", "OOPS-L6-Q2", "OOPS-L6-Q3"],
    },
    {
      week: "07",
      ques: [
        "Generic Exception Handler",
        "Invalid File Extension",
        "Numeric Array",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FGenericExceptionHandler.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FInvalidFileExtension.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FNumericArray.java/raw?ref=main",
      ],
      id: ["OOPS-L7-Q1", "OOPS-L7-Q2", "OOPS-L7-Q3"],
    },
    {
      week: "08",
      ques: ["Inheritance Area", "Vehicle Car"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FInheritanceArea.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FVehicleCar.java/raw?ref=main",
      ],
      id: ["OOPS-L8-Q1", "OOPS-L8-Q2"],
    },
    {
      week: "09",
      ques: ["Interface Sports", "Student Record"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FInterfaceSports.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FStudentRecord.java/raw?ref=main",
      ],
      id: ["OOPS-L9-Q1", "OOPS-L9-Q2"],
    },
    {
      week: "10",
      ques: [
        "Count Characters, Vowels, Lines & Words",
        "Directories",
        "Menu Driven",
        "Random Access File",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FCountCharactersVowelsLinesWords.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FDirectories.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FMenuDriven.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FRandomAccessFile.java/raw?ref=main",
      ],
      id: ["OOPS-L10-Q1", "OOPS-L10-Q2", "OOPS-L10-Q3", "OOPS-L10-Q4"],
    },
    {
      week: "11",
      ques: ["Menu Driven", "Swings Counter", "Union & Intersection"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FMenuDriven.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FSwingsCounter.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2001%2FUnion&Intersection.java/raw?ref=main",
      ],
      id: ["OOPS-L11-Q1", "OOPS-L11-Q2", "OOPS-L11-Q3", "OOPS-L11-Q4"],
    },
  ];
  const n = "Object Oriented Programming";
  const sh = "oops";
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
          <Breadcrumb.Item href="/oops">
            Object Oriented Programming
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="week-card">
        <WeekCard n={n} sh={sh} questions={questions}/>
      </div>
    </div>
  );
};

export default OOPS;
