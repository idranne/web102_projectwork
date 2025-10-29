import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //code adapted from api provider
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_PWi4xk2VTcPzzra9M4F0r24ygKqvcudKUSi5iAhI0PFFjlEgAM1cDhlWTTW7B1JC"
  });

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  const [dogData, setDogData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
  
      const response = await fetch(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
        requestOptions
      );
      const data = await response.json();
      setDogData(data[0]);
  
    
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className = 'header'>
      <div className="fetchData">
        {loading ? (
          <p>Loading new dog...</p>
        ) : dogData ? (
          <>
            <img src={dogData.url} alt="Dog" width="300" />
            <h2>{dogData.breeds[0]?.name}</h2>
            <p><strong>Origin:</strong> {dogData.breeds[0]?.origin || "Unknown"}</p>
            <p><strong>Life Span:</strong> {dogData.breeds[0]?.life_span}</p>
            <p><strong>Temperament:</strong> {dogData.breeds[0]?.temperament}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="randomBtn">
        <button onClick={fetchData}>Discover More Breeds!</button>
      </div>
      </div>
    </>
  );
}

export default App;