import React from "react";

import { HiInformationCircle } from "react-icons/hi";
function Description() {
  return (
    <div>
      <h2 className="font-medium mb-[46px] flex">
        Key Feautures <HiInformationCircle />
      </h2>

      <div className="flex ">
        <input
          className="border-2 border-[#E0E0E3]"
          type="text"
          placeholder="e.g Near to city"
        />
        <button className="bg-[#E0E0E3] p-2 rounded">Add</button>
      </div>

      <h2 className="mt-[119px] flex">
        Description
        <HiInformationCircle />
      </h2>
      <textarea
        className="w-[790px] h-[229px] border-2 border-[#E0E0E3]"
        placeholder="Max 500 Words"
      />

      <div className=" flex justify-between  mt-[72px] py-3 bg-white  ">
        <button
          type="submit"
          className="mr-7 inline-flex  justify-center w-24 py-2  border border-transparent shadow-sm text-sm font-medium rounded-md  ring-gray-500 ring-offset-4  text-gray bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2  focus:ring-indigo-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex mr-[1025px] justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-[#2E3192]  hover:bg-indigo-700 text-whitefocus:outline-none focus:ring-2  focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Description;
