import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-gray-900 text-white active:bg-blue-900 font-bold text-sm h-6 px-6 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Check for supporting search methods
      </button>
      {showModal ? (
        <>
          <div className="justify-center text-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-auto my-6 items-center lg:ml-44 sm:ml-36 ml-7 justify-center lg:max-w-3xl  w-full ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative text-center flex flex-col sm:w-3/4 w-11/12 h-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-center items-center   py-2 border-b bg-gray-900 border-solid border-slate-200 rounded-t">
                  <h3 className="md:text-lg text-sm ml-9 text-center font-semibold w-full text-white">
                    Syntax for all the supported searching regex
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <p className="my-0 text-center text-gray-900 md:text-base text-sm leading-relaxed">
                    All lab acronyms:{" "}
                    <mark className="px-1 text-white bg-gray-900 rounded-lg !bg-gray-900">
                      DS, OOPS, DAA, DBS, ML, IDA{" "}
                    </mark>
                    <br /> You can search for a lab question by its acronym, lab
                    number and question number. <br />
                    For example, OOPS-L4-Q1 will search for the first question
                    of fourth lab of Object Oriented Programming.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-gray-900 background-transparent font-bold uppercase px-6 py-2 md:text-sm text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
