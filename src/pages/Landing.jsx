import React, { useEffect, useState } from "react";
import axios from "axios";

function Landing() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=32");
        console.log("Data fetched successfully:", response.data); // Log the data
        setPhotos(response.data);
        console.log("Photos state updated:", photos); // Log the updated state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchPhotos();
  },);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border p-2 rounded shadow">
            <img src={photo.download_url} alt={photo.author} className="w-full h-auto" />
            <p className="text-sm mt-2">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
