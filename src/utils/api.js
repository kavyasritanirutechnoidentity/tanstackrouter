export const fetchPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      const data = await response.json();
      console.log('Fetched photos:', data);  
      return data; 
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];  
    }
  };