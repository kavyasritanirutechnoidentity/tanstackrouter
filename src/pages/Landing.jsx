import React, { useEffect, useState } from "react";
import axios from "axios";

function Landing() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then(response => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="border p-2 rounded shadow">
            <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-auto" />
            <p className="text-sm mt-2">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
