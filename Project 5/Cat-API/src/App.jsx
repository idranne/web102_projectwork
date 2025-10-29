import { useState, useEffect } from 'react';
import './App.css';


//copied from the api server
function App() {
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
  const [banList, setBanList] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      requestOptions
    );
    const data = await response.json();
    const newDog = data[0];

    setDogData(newDog);
    setBanList(prevList => [...prevList, newDog]); // Automatically add to ban list

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="banList">
        <h3>Ban Dogs</h3>
        <ul>
          {banList.map((dog, index) => (
            <li key={index}>
              <img src={dog.url} alt="Banned Dog" width="100" />
              <strong>{dog.breeds[0]?.name || "Unknown Breed"}</strong><br />
              <small>{dog.breeds[0]?.origin || "Unknown Origin"}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="mainContent">
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
    </div>
  );
}

export default App;