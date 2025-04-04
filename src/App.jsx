import React from "react";
import { Link } from "@tanstack/react-router"; // Import Link for navigation
import "./index.css";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4 text-center">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-md mb-6">
        Welcome to the Home Page
      </h1>
      <div className="flex space-x-4">
        {/* Button to navigate to Login */}
        <Link
          to="/login"
          className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-200 transition shadow-md"
        >
          Go to Login
        </Link>
        {/* Button to navigate to Dashboard */}
        <Link
          to="/dashboard"
          className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-200 transition shadow-md"
        >
          Go to Dashboard
        </Link>
        {/* Button to navigate to Gallery */}
        <Link
          to="/home"
          className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-200 transition shadow-md"
        >
          Go to Gallery
        </Link>
      </div>
    </div>
  );
}