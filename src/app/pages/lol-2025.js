import React from "react";
import Layout from "../components/Layout";
import "./lol-2025.css";

const LoL2025 = () => {
  const cards = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Card ${index + 1}`,
    imageUrl: `https://via.placeholder.com/150?text=Card+${index + 1}`,
  }));

  return (
    <Layout>
      <div className="container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.name} className="card-image" />
            <h3 className="card-name">{card.name}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default LoL2025;
