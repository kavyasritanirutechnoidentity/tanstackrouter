import React from "react";
import { Link } from "@tanstack/react-router"; // Import Link for navigation

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-red-500 p-4 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Dashboard</h1>
      <p className="text-lg mb-6">Welcome to your personalized space!</p>
      <div className="flex space-x-4">
        {/* Button to navigate to Home */}
        <Link
          to="/"
          className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-200 transition shadow-md"
        >
          Go to Home
        </Link>
        {/* Button to navigate to Login */}
        <Link
          to="/login"
          className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-200 transition shadow-md"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}