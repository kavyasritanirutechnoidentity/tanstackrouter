import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@tanstack/react-router"; // Import Link for navigation

function Landing() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=32");
        console.log("Data fetched successfully:", response.data);
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-r from-teal-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-md">Landing Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {photos.map((photo) => (
          <div key={photo.id} className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={photo.download_url} alt={photo.author} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">{photo.author}</p>
              <p className="text-sm text-gray-600">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
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
      </div>
    </div>
  );
}

export default Landing;