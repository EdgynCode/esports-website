import React from "react";
import Layout from "../components/Layout";
import "./vct-2025.css";

const VCT2025 = () => {
  const cards = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Card ${index + 1}`,
    imageUrl: `https://via.placeholder.com/150?text=Card+${index + 1}`,
  }));

  return (
    <Layout>
      <div className="tab-container">
        <div className="leagues">VCT Americas</div>
        <div className="leagues">VCT EMEA</div>
        <div className="leagues">VCT CN</div>
        <div className="leagues">VCT Pacific</div>
      </div>
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

export default VCT2025;
