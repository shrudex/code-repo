import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/default.css"; // choose a style
import CodeBlock from "./QuestionCard";
import QuestionCard from "./QuestionCard";
const Home = () => {
  const labID = [
    {
      week: "01",
      ques: ["All Tables Defination", "Spool File"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek01%2Fall-tables.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek01%2Fweek01-spool.txt/raw?ref=main",
      ],
      id: ["DBS-L1-Q1", "DBS-L1-Q2"],
    },

    {
      week: "02",
      ques: ["Commands", ""],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek02%2Fcommands.md/raw?ref=main",
      ],
      id: ["DBS-L2-Q1"],
    },

    {
      week: "03",
      ques: ["Spool File"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek03%2Fweek-03spool.txt/raw?ref=main",
      ],
      id: ["DBS-L3-Q1"],
    },

    {
      week: "04",
      ques: ["Commands", "Spool File"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek04%2Fcommands.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek04%2Fw04-spool.txt/raw?ref=main",
      ],
      id: ["DBS-L4-Q1", "DBS-L4-Q2"],
    },

    {
      week: "05",
      ques: ["Commands"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek05%2Fcommands.md/raw?ref=main",
      ],
      id: ["DBS-L5-Q1"],
    },

    {
      week: "06",
      ques: ["Commands", "Spool File"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek06%2commands.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek06%2Fw06spool.txt/raw?ref=main",
      ],
      id: ["DBS-L6-Q1", "DBS-L6-Q2"],
    },

    {
      week: "07",
      ques: ["pl/SQL Code"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek07%2Fplsql.md/raw?ref=main",
      ],
      id: ["DBS-L7-Q1"],
    },

    {
      week: "08",
      ques: ["pl/SQL 8.1", "pl/SQL 8.2"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek08%2Fplsql-8.1.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Database%20Lab%2FWeek08%2Fplsql-8.2.md/raw?ref=main",
      ],
      id: ["DBS-L8-Q1", "DBS-L8-Q2"],
    },
    {
      week: "02",
      ques: ["Exercise 1", "Exercise 2"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2002%2FExcercise%201.ipynb/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2002%2FExcercise%202.ipynb/raw?ref=main",
      ],
      id: ["IDA-L2-Q1", "IDA-L2-Q2"],
    },

    {
      week: "03",
      ques: ["Bollywood Exercise Dataset", "Northwind Dataset"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2003%2Fshubhsinha_bollywood_exercise1.ipynb/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2003%2Fshubhsinha_northwind.xlsx/raw?ref=main",
      ],
      id: ["IDA-L3-Q1", "IDA-L3-Q2"],
    },

    {
      week: "04",
      ques: ["Week 04 Analysis"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2004%2Fshubhsinha_week4_210968172%20(3).ipynb/raw?ref=main",
      ],
      id: ["IDA-L4-Q1"],
    },

    {
      week: "05",
      ques: ["Week 05 Analysis"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2005%2Fshubhsinha_210968172_week05.ipynb/raw?ref=main",
      ],
      id: ["IDA-L5-Q1"],
    },

    {
      week: "06",
      ques: ["Week 06 Analysis"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2006%2FShubhSinha_210968172.ipynb/raw?ref=main",
      ],
      id: ["IDA-L6-Q1"],
    },

    {
      week: "07",
      ques: ["Week 07 Analysis"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2007%2Fshubhsinha_210968172%202%20(1).ipynb/raw?ref=main",
      ],
      id: ["IDA-L7-Q1"],
    },

    {
      week: "08",
      ques: ["Week 08 Analysis"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Analytics%2FWeek%2008%2FShubhSinha_210968172_Week08.ipynb/raw?ref=main",
      ],
      id: ["IDA-L8-Q1"],
    },
    {
      week: "01",
      ques: ["", "", ""],
      desc: [" ", " ", " ", " "],
      links: [],
      id: [],
    },

    {
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
    },

    {
      week: "03",
      ques: [
        "Delete Substring",
        "Insert Substring",
        "Length Of String",
        "Polynomial",
        "String Comparison",
        "String Concatenation",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2003%2FDeleteSubstring.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2003%2FInsertSubstring.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2003%2FLengthOfString.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2003%2FPolynomial.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2003%2FStringComparison.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2003%2FStringConcatenation.cpp/raw?ref=main",
      ],
      id: [
        "DS-L3-Q1",
        "DS-L3-Q2",
        "DS-L3-Q3",
        "DS-L3-Q4",
        "DS-L3-Q5",
        "DS-L3-Q6",
      ],
    },

    {
      week: "04",
      ques: ["Factorial", "Fibonacci", "GCD", "TowerOfHanoi"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2004%2FFactorial.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2004%2FFibonacci.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2004%2FGCD.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2004%2FTowerOfHanoi.cpp/raw?ref=main",
      ],
      id: ["DS-L4-Q1", "DS-L4-Q2", "DS-L4-Q3", "DS-L4-Q4"],
    },

    {
      week: "05",
      ques: [
        "Palindrome Using Stacks",
        "Stack Implementation",
        "Valid Paranthesis",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2005%2FPalindromeUsingStacks.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2005%2FStackImplementation.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2005%2FValidParanthesis.cpp/raw?ref=main",
      ],
      id: ["DS-L5-Q1", "DS-L5-Q2", "DS-L5-Q3"],
    },

    {
      week: "06",
      ques: ["Postfix", "PostfixEvaluation", "Prefix", "PrefixEvaluation"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2006%2FPostfix.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2006%2FPostfixEvaluation.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2006%2FPrefix.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2006%2FPrefixEvaluation.cpp/raw?ref=main",
      ],
      id: ["DS-L6-Q1", "DS-L6-Q2", "DS-L6-Q3", "DS-L6-Q4"],
    },

    {
      week: "07",
      ques: ["Circular Queue", "Queue Implementation", "String Circular Queue"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2007%2FCircularQueue.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2007%2FQueueImplementation.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2007%2FStringCircularQueue.cpp/raw?ref=main",
      ],
      id: ["DS-L7-Q1", "DS-L7-Q2", "DS-L7-Q3"],
    },

    {
      week: "08",
      ques: ["Linked List Operation", "Queues", "Stacks"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2008%2FLinkedListOperation.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2008%2FQueues.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2008%2FStacks.cpp/raw?ref=main",
      ],
      id: ["DS-L8-Q1", "DS-L8-Q2", "DS-L8-Q3"],
    },

    {
      week: "09",
      ques: ["", "", ""],
      desc: [" ", " ", " ", " "],
      links: [],
      id: [],
    },

    {
      week: "10",
      ques: ["", "", ""],
      desc: [" ", " ", " ", " "],
      links: [],
      id: [],
    },

    {
      week: "11",
      ques: ["Heap and Merge Sort", "Linear and Binary Search", "Sorting"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2011%2FHeap&MergeSort.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2011%2FLinear&BinarySearch.cpp/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/Data%20Structures%2FWeek%2011%2FSorting.cpp/raw?ref=main",
      ],
      id: ["DS-L11-Q1", "DS-L11-Q2", "DS-L11-Q3"],
    },
    {
      week: "01",
      ques: [
        "Greatest Number",
        "Registration Number",
        "Retirement Date",
        "Taxi Service",
      ],
      desc: [],
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
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2002%2FBitwiseAddition.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2002%2FConversionDataType.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2002%2FConversionIntDoubleCharByte.java/raw?ref=main",
      ],
      id: ["OOPS-L2-Q1", "OOPS-L2-Q2", "OOPS-L2-Q3"],
    },
    {
      week: "03",
      ques: ["Area Of Rectangle", "Day Of Date", "Prime Number", "Voting"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2003%2FAreaOfRectangle.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2003%2FDayOfDate.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2003%2FPrimeNumber.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2003%2FVoting.java/raw?ref=main",
      ],
      id: ["OOPS-L3-Q1", "OOPS-L3-Q2", "OOPS-L3-Q3", "OOPS-L3-Q4"],
    },
    {
      week: "04",
      ques: ["Matrix Multiplication", "Odd Even Sum", "Sum Of Array"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2004%2FMatrixMultiplication.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2004%2FOddEvenSum.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2004%2FSumOfArray.java/raw?ref=main",
      ],
      id: ["OOPS-L4-Q1", "OOPS-L4-Q2", "OOPS-L4-Q3"],
    },
    {
      week: "05",
      ques: ["Array Of Integers", "Post Office"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2005%2FArrayOfIntegers.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2005%2FPostOffice.java/raw?ref=main",
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
      desc: [],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2006%2FBookClassProgram.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2006%2FMenuDrivenStrings.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2006%2FStudentClassProgram.java/raw?ref=main",
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
      desc: [],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2007%2FGenericExceptionHandler.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2007%2FInvalidFileExtension.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2007%2FNumericArray.java/raw?ref=main",
      ],
      id: ["OOPS-L7-Q1", "OOPS-L7-Q2", "OOPS-L7-Q3"],
    },
    {
      week: "08",
      ques: ["Inheritance Area", "Vehicle Car"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2008%2FInheritanceArea.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2008%2FVehicleCar.java/raw?ref=main",
      ],
      id: ["OOPS-L8-Q1", "OOPS-L8-Q2"],
    },
    {
      week: "09",
      ques: ["Interface Sports", "Student Record"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2009%2FInterfaceSports.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2009%2FStudentRecord.java/raw?ref=main",
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
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2010%2FCountCharactersVowelsLinesWords.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2010%2FDirectories.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2010%2FMenuDriven.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2010%2FRandomAccessFile.java/raw?ref=main",
      ],
      id: ["OOPS-L10-Q1", "OOPS-L10-Q2", "OOPS-L10-Q3", "OOPS-L10-Q4"],
    },
    {
      week: "11",
      ques: ["Menu Driven", "Swings Counter", "Union & Intersection"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2011%2FMenuDriven.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2011%2FSwingsCounter.java/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/OOPS%2FWeek%2011%2FUnion&Intersection.java/raw?ref=main",
      ],
      id: ["OOPS-L11-Q1", "OOPS-L11-Q2", "OOPS-L11-Q3", "OOPS-L11-Q4"],
    },
    {
      week: "01",
      ques: ["Doubly Linked List", "Binary Search Tree", "Graph"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2001%2FQ1)%20Doubly%20Linked%20List.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2001%2FQ2)%20Binary%20Search%20Tree.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2001%2FQ3)%20Graph.md/raw?ref=main",
      ],
      id: ["DAA-L1-Q1", "DAA-L1-Q2", "DAA-L1-Q3"],
    },
    {
      week: "02",
      ques: [
        "Euclid's Algorithm",
        "Consecutive Integer Checking Method",
        "Middle School Method",
        "Brute Force GCD",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2002%2FQ1)%20Euclid's%20Algo.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2002%2FQ2)%20Consecutive%20Integer%20Checking%20Method.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2002%2FQ3)%20Middle%20School%20Method.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2002%2FQ4)%20Brute%20Force.md/raw?ref=main",
      ],
      id: ["DAA-L2-Q1", "DAA-L2-Q2", "DAA-L2-Q3", "DAA-L2-Q4"],
    },
    {
      week: "03",
      ques: [
        "Selection Sort",
        "Bubble Sort",
        "String Matching",
        "Matrix Multiplication",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2003%2FQ1%20-%20SelectionSort.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2003%2FQ2%20-%20Bubble%20Sort.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2003%2FQ3%20-%20String%20Matching.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2003%2FQ4%20-%20Matrix%20Multiplication.md/raw?ref=main",
      ],
      id: ["DAA-L3-Q1", "DAA-L3-Q2", "DAA-L3-Q3", "DAA-L3-Q4"],
    },
    {
      week: "04",
      ques: ["Knapsack Problem", "Assignment Problem"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2004%2FQ1%20-%20Knapsack%20Problem.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2004%2FQ2%20-%20Assignment%20Problem.md/raw?ref=main",
      ],
      id: ["DAA-L4-Q1", "DAA-L4-Q2"],
    },
    {
      week: "05",
      ques: [
        "Breadth First Search Algorithm [BFS]",
        "Depth First Search Algorithm [DFS]",
        "Insertion Sort",
        "Breadth First Search Algorithm [BFS] (Node beigns with 1)",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2005%2FQ1%20-%20BFS%20Algorithm.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2005%2FQ2%20-%20DFS%20Algorithm.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2005%2FQ3%20-%20Insertion%20Sort.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2005%2FQ4%20-%20BFS%20Algorithm.md/raw?ref=main",
      ],
      id: ["DAA-L5-Q1", "DAA-L5-Q2", "DAA-L5-Q3", "DAA-L5-Q4"],
    },
    {
      week: "06",
      ques: ["Quick Sort Technique", "Merge Sort Technique", "Binary Search"],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2006%2FQ1%2-%20Quick%20Sort.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2006%2FQ2%2-%20Merge%20Sort.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2006%2FQ3%2-%20Binary%20Search.md/raw?ref=main",
      ],
      id: ["DAA-L6-Q1", "DAA-L6-Q2", "DAA-L6-Q3"],
    },
    {
      week: "07",
      ques: [
        "Binary Search Tree (BST) Traversal",
        "AVL Tree",
        "Binary Search Tree (BST) Height",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2007%2FQ1%20-%20BinarySearchTree%20Traversal.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2007%2FQ2%20-%20AVL%20Tree.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2007%2FQ3%20-%20BST%20Height.md/raw?ref=main",
      ],
      id: ["DAA-L7-Q1", "DAA-L7-Q2", "DAA-L7-Q3"],
    },
    {
      week: "08",
      ques: [
        "Diameter of Binary Tree [BT]",
        "Task Scheduling",
        "Task Dependency",
        "Fibonacci Series",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2008%2FQ1%20-%20Diameter%20Of%20BT.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2008%2FQ2%20-%20Task%20Scheduling.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2008%2FQ3%20-%20Task%20Dependency.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2008%2FQ4%20-%20Fibonacci%20Series.md/raw?ref=main",
      ],
      id: ["DAA-L8-Q1", "DAA-L8-Q2", "DAA-L8-Q3", "DAA-L8-Q4"],
    },
    {
      week: "09",
      ques: [
        "Comparison Counting Algorithm",
        "Horspool's Algorithm [String Matching]",
        "Open Hash Table",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2009/Q1%20-%20Comparison%20Counting%20Algorithm.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2009/Q2%20-%20Horspool's%20Algorithm%20-%20String%20Matching.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2009/Q3%20-%20Hash%20Table.md/raw?ref=main",
      ],
      id: ["DAA-L9-Q1", "DAA-L9-Q2", "DAA-L9-Q3"],
    },
    {
      week: "10",
      ques: [
        "Binomial Coefficient",
        "Heap Sort Algorithm",
        "Transitive Closure in Graphs",
        "Find All Pairs Shortest Path [Floyd's Algorithm]",
        "Knapsack Problem",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2010/Q1%20-%20Binomial%20Coefficient.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2010/Q1%20-%20Heap%20Sort.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2010/Q2%20-%20Transitive%20Closure.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2010/Q3%20-%20All%20Pairs%20Shortest%20Paths.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2010/Q4%20-%20Knapsack%20Problem.md/raw?ref=main",
      ],
      id: [
        "DAA-L10-Q1",
        "DAA-L10-Q2",
        "DAA-L10-Q3",
        "DAA-L10-Q4",
        "DAA-L10-Q5",
      ],
    },
    {
      week: "11",
      ques: [
        "Prim's Algorithm for MST",
        "Kruskal's Algorithm for MST",
        "Dijkstra's Algorithm for Shortest Path",
      ],
      desc: [" ", " ", " ", " "],
      links: [
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2011/Q1%20-%20Prim's%20Algo.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2011/Q2%20-%20Kruskal's%20Algo.md/raw?ref=main",
        "https://gitlab.com/api/v4/projects/50442481/repository/files/DAA%20Lab%2FWeek%2011/Q3%20-%20Dijkstra's%20Algo.md/raw?ref=main",
      ],
      id: ["DAA-L11-Q1", "DAA-L11-Q2", "DAA-L11-Q3"],
    },
  ];

  const [search, setSearch] = useState(undefined);
  const [ques, setQues] = useState(undefined);
  const [link, setLink] = useState(undefined);
  const [id, setID] = useState(undefined);

  const getLabById = (givenId) => {
    return labID.find((lab) => lab.id.includes(givenId));
  };

  const getIndexOfId = (data, givenId) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].id.length; j++) {
        if (data[i].id[j] === givenId) {
          setID(j);
          return j;
        }
      }
    }
    setID(undefined);
    setQues(undefined);
    return -1;
  };

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
          type="text"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="sub-heading text-center font-bold bg-blue-800 border border-gray-300 text-blue-800 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white dark:border-black dark:placeholder-red-300 dark:blue-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search your question... (eg. OOPS-L3-Q2)"
          onChange={(e) => {
            const newSearch = e.target.value.toUpperCase();
            setSearch(newSearch);
            console.log(newSearch);

            const result = getLabById(newSearch);
            if (result) {
              const index = getIndexOfId(labID, newSearch);
              if (index !== -1) {
                setQues(result.ques[index]);
                setLink(result.links[index]);
              } 
            }
            else{
                setQues(undefined);
                setLink(undefined);
            }
            console.log(ques);
            console.log(link);
          }}
        />
        <p
          id="helper-text-explanation"
          className="gray-text mt-2 text-sm sub-text font-medium text-center"
        >
          Streamline Your Learning with Easy Access to DSE LAB Program Codes.
        </p>
      </div>
      <div className="answer-lab flex items-center justify-center ">
        {ques !== undefined && <QuestionCard ques={ques} link={link} />}
      </div>
    </div>
  );
};

export default Home;
