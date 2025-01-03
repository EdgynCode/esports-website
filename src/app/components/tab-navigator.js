import React from "react";
import "./tab-navigator.css";

const TabNavigator = ({ activeTab, setActiveTab, leagueArray }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      {leagueArray.map((league) => (
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
