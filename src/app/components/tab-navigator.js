import React from "react";
import "./TabNavigator.css";

const TabNavigator = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      {["VCT Americas", "VCT EMEA", "VCT CN", "VCT Pacific"].map((league) => (
        <div
          key={league}
          className={`leagues ${activeTab === league ? "active" : ""}`}
          onClick={() => handleTabClick(league)}
        >
          {league}
        </div>
      ))}
    </div>
  );
};

export default TabNavigator;
