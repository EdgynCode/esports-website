import React from "react";
import valBG from "../assets/img/valorant.jpg";
import "./home.css";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <div className="container">
      <Layout>
        <div className="image-container">
          <img alt="valbg" src={valBG} />
          <div className="gradient-overlay">
            <h1>Starts browsing for tournaments using the links below.</h1>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
