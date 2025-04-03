// import { createFileRoute } from "@tanstack/react-router";
// import Landing from "../pages/Landing";
// import React from "react";
// import { useNavigate } from "@tanstack/react-router";
// export const Route = createFileRoute("/home")({
//   component: Landing,
// });
// export default function HomePage() {
//   const navigate = useNavigate(); // Initialize navigation

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-center">
//       <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
//       <div className="flex space-x-4">
//         {/* Button to navigate to Home */}
//         <button
//           onClick={() => navigate("/home")}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Go to Home
//         </button>
//         {/* Button to navigate to Login */}
//         <button
//           onClick={() => navigate("/login")}
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Go to Login
//         </button>
//         {/* Button to navigate to Dashboard */}
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Go to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import Landing from "../pages/Landing";

export const Route = createFileRoute("/home")({
  component: Landing,
});
