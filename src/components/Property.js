import React from "react";

import { HiInformationCircle } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

const Property = () => {
  return (
    <form action="#" method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-2 py-8 bg-white sm:p-6">
          <div className=" mb-5">
            <div className="col-span-6 sm:col-span-3 w-64">
              <label
                htmlFor="country"
                className="mb-2 flex text-sm font-medium text-gray-700"
              >
                Property Type
                <HiInformationCircle />
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option></option>
                <option>Head office</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="flex gap-7">
              <div className=" col-span-6 sm:col-span-3 w-64">
                <label
                  htmlFor="country"
                  className="flex mt-3 text-sm font-medium text-gray-700"
                >
                  Post Code
                  <HiInformationCircle />
                </label>

                <div className="flex p-2 ">
                  <input
                    type="text"
                    className="w-[220px] mt-1 block  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></input>
                  <button className="h-[40px] p-3 mt-1 rounded bg-gray-200">
                    <CiSearch />
                  </button>
                </div>
              </div>

              <div className=" mt-6 col-span-6 sm:col-span-3 w-[500px]">
                <label
                  htmlFor="country"
                  className="flex text-sm font-medium text-gray-700"
                >
                  Address
                  <HiInformationCircle />
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div className=" mt-3 col-span-6 sm:col-span-3 w-[790px]">
              <label
                htmlFor="country"
                className="flex text-sm font-medium text-gray-700"
              >
                Location Display
                <HiInformationCircle />
              </label>
              <input
                id="country"
                className="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></input>
            </div>
            <div className="w-[790px] flex gap-4">
              <div className="col-span-6 sm:col-span-3 w-64">
                <label
                  htmlFor="country"
                  className="flex mt-3 text-sm font-medium text-gray-700"
                >
                  Bedroom
                  <HiInformationCircle />
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option></option>
                  <option>Head office</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3 w-64">
                <label
                  htmlFor="country"
                  className="flex mt-3 text-sm font-medium text-gray-700"
                >
                  Bathroom
                  <HiInformationCircle />
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option></option>
                  <option>Head office</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3 w-64">
                <label
                  htmlFor="country"
                  className="flex mt-3 text-sm font-medium text-gray-700"
                >
                  Reception
                  <HiInformationCircle />
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option></option>
                  <option>Head office</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-[790px] flex gap-10">
            <div className="col-span-6 sm:col-span-3 w-64">
              <label
                htmlFor="country"
                className="flex mt-3 text-sm font-medium text-gray-700"
              >
                EPC rating status
                <HiInformationCircle />
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option></option>
                <option>Head office</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3 w-64">
              <label
                htmlFor="country"
                className="flex mt-3 text-sm font-medium text-gray-700"
              >
                Gas saftey status
                <HiInformationCircle />
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option></option>
                <option>Head office</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3 w-64">
              <label
                htmlFor="country"
                className="flex mt-3 text-sm font-medium text-gray-700"
              >
                EISR
                <HiInformationCircle />
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option></option>
                <option>Head office</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>
        <div className=" flex justify-between  px-4 py-3 bg-white  sm:px-6">
          <button
            type="submit"
            className="mr-4 inline-flex  justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  ring-gray-500 ring-offset-4  text-gray bg-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2  focus:ring-indigo-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex mr-[979px] justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white     bg-[#2E3192]  hover:bg-indigo-700 text-whitefocus:outline-none focus:ring-2  focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Property;
