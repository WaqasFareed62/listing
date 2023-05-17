// import React, { useState } from "react";

import TabNavigation from "./components/listing";
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="max-w-md mx-auto flex justify-between">
//         <div>Logo</div>
//         <div>Navbar Links</div>
//       </div>
//     </nav>
//   );
// };

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-200 h-screen w-48 py-4">
//       <ul>
//         <li>Menu Item 1</li>
//         <li>Menu Item 2</li>
//         <li>Menu Item 3</li>
//       </ul>
//     </div>
//   );
// };

// const TabNavigation = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   const handleTabChange = (tabIndex) => {
//     setActiveTab(tabIndex);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <div className="flex border-b border-gray-200">
//         <button
//           className={`py-2 px-4 text-sm font-medium ${
//             activeTab === 1
//               ? "text-indigo-600 border-b-4 border-indigo-600"
//               : "text-gray-500"
//           }`}
//           onClick={() => handleTabChange(1)}
//         >
//           Tab 1
//         </button>
//         <button
//           className={`py-2 px-4 text-sm font-medium ${
//             activeTab === 2
//               ? "text-indigo-600 border-b-4 border-indigo-600"
//               : "text-gray-500"
//           }`}
//           onClick={() => handleTabChange(2)}
//         >
//           Tab 2
//         </button>
//         <button
//           className={`py-2 px-4 text-sm font-medium ${
//             activeTab === 3
//               ? "text-indigo-600 border-b-4 border-indigo-600"
//               : "text-gray-500"
//           }`}
//           onClick={() => handleTabChange(3)}
//         >
//           Tab 3
//         </button>
//       </div>
//       <div className="mt-8">
//         {activeTab === 1 && (
//           <div>
//             <h3>Tab 1</h3>
//             <form>
//               {/* Dummy Form Fields */}
//               <input type="text" placeholder="Name" className="mb-2" />
//               <input type="email" placeholder="Email" className="mb-2" />
//               <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
//                 Submit
//               </button>
//             </form>
//           </div>
//         )}
//         {activeTab === 2 && (
//           <div>
//             <h3>Tab 2</h3>
//             <form>
//               {/* Dummy Form Fields */}
//               <input type="text" placeholder="Username" className="mb-2" />
//               <input type="password" placeholder="Password" className="mb-2" />
//               <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
//                 Sign In
//               </button>
//             </form>
//           </div>
//         )}
//         {activeTab === 3 && (
//           <div>
//             <h3>Tab 3</h3>
//             <form>
//               {/* Dummy Form Fields */}
//               <input type="text" placeholder="Address" className="mb-2" />
//               <textarea placeholder="Message" className="mb-2" />

//               <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
//                 Send
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        {/* <Sidebar /> */}
        <TabNavigation />
      </div>
    </div>
  );
};

export default App;
