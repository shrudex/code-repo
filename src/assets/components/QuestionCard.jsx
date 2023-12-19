import { Accordion } from "flowbite-react";
import React, { useEffect, useState } from "react";

const QuestionCard = ({ ques, link }) => {
  const [ans, setAns] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        setAns(data);
        console.log("answer");
        console.log(ans);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAns("Error fetching data. Please try again later.");
      }
    };
    fetchFiles();
  }, [ans, link]);

  return (
    <div className="w-5/6 rounded-full">
      <Accordion className="bg-transparent flex flex-col justify-center items-center border-none gap5 flex-wrap">
        <Accordion.Panel className="flex flex-col justify-center items-center px-10 ">
          <div className="accordion-panel w-full justify-center bg-transparent">
            <Accordion.Title className="bg-gray-900 text-lg text-white h-12 py-2 rounded-xl w-full text-center hover:bg-blue-800 hover:text-white hover:font-medium hover:text-xl">
              {ques}
            </Accordion.Title>

            <Accordion.Content className="rounded-xl  !bg-transparent">
              <pre className="code overflow-x-auto scrolling-touch">
                {" "}
                <code className="mb-2 text-black !text-black bg-transparent max-w-md ht-text select-text">
                  {ans}
                </code>
              </pre>
              <p className="text-gray-500 !text-black text-base ">
                <p>
                  Check out complete code in a new tab&nbsp;
                  <a
                    className="text-cyan-600 hover:underline !text-blue-600 font-medium"
                    href={link}
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
      </Accordion>
    </div>
  );
};

export default QuestionCard;
