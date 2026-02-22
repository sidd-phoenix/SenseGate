import React from "react";
import "../styles/DevelopersPage.css";

const DevelopersPage = () => {
  const developers = [
    {
      name: "Aadil Siddiqui",
      photo: "https://via.placeholder.com/150",
      github: "https://github.com/sidd-phoenix/",
    }
  ];

  return (
    <section className="developers">
      <div className="card-container">
        {developers.map((dev, index) => (
          <div className="card" key={index}>
            <img src={dev.photo} alt={`${dev.name}'s photo`} />
            <h3>{dev.name}</h3>
            <p>Github: {dev.github}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopersPage;
