import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = "https://sensegate.onrender.com"; // Replace with your API endpoint

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="data-container">
        {error ? (
          <p style={{ color: "red" }}>Failed to fetch data: {error}</p>
        ) : apiData ? (
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </section>
  );
};

export default HomePage;
