import React, { useEffect, useState } from "react";
import "./App.css";



const App = () => {
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
        // console.log(err);
        setError(err.message);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to Our Website</h1>
        <p>Your tagline or mission statement goes here</p>
      </header>

      <main>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <section className="hero">
          <h2>Discover Our Amazing Platform</h2>
          <p>
            We provide the best services to help you achieve your goals. Join us
            today and explore what we have to offer.
          </p>
          <button>Get Started</button>
          <div id="apiData" className="data-container">
            {error ? (
              <p style={{ color: "red" }}>Failed to fetch data: {error}</p>
            ) : apiData ? (
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
