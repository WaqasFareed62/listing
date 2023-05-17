import React, { useState } from "react";
import Property from "./Property";
import Description from "./Description";
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className=" p-4">
      <div className="flex gap-10">
        <button
          className={`py-2 px-4  ${
            activeTab === 1
              ? "border-b-[10px] border-blue-500 rounded-b text-blue-500"
              : "border-b-[10px] border-gray-300"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Property Details
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 2
              ? "border-b-[10px] border-blue-500 rounded-b text-blue-500"
              : "border-b-[10px] border-gray-300"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 3
              ? "border-b-[10px] border-blue-500 rounded-b text-blue-500"
              : "border-b-[10px] border-gray-300"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Photos
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div className="bg-white">
            <Property />
          </div>
        )}
        {activeTab === 2 && (
          <div className="bg-white">
            <Description />
          </div>
        )}
        {activeTab === 3 && <div className="bg-white">Content for Photos</div>}
      </div>
    </div>
  );
};

export default TabNavigation;
