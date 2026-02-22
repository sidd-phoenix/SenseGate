import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/HomePage";
import DevelopersPage from "./components/DevelopersPage";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>SENSEGATE</h1>
          <p>Your go-to solution to check the status of the laundry</p>
        </header>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/developers">Developers</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/developers" element={<DevelopersPage />} />
          </Routes>
        </main>

        <footer>
          <p>© 2024 Cipher Technologies Ltd. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
