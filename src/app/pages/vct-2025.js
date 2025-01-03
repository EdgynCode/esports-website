import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TabNavigator from "../components/tab-navigator";
import "./vct-2025.css";
import { fetchVCTTeamInfo } from "../../api/data";

const VCT2025 = () => {
  const leagueArray = ["VCT Americas", "VCT EMEA", "VCT CN", "VCT Pacific"];
  const [activeTab, setActiveTab] = useState("VCT CN");
  const [vctData, setVCTData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    let leagueID;
    switch (activeTab) {
      case "VCT EMEA":
        leagueID = "V-VCTEMEA";
        break;
      case "VCT CN":
        leagueID = "V-VCTCN";
        break;
      case "VCT Pacific":
        leagueID = "V-VCTPac";
        break;
      default:
        leagueID = "V-VCTAmer";
        break;
    }
    const data = await fetchVCTTeamInfo(leagueID);
    setVCTData(data);
  };

  const generateCards = () => {
    return vctData.map((team, index) => ({
      id: `${activeTab}-${index + 1}`,
      name: team.teamName,
      imageUrl: team.imageUrl,
    }));
  };

  return (
    <Layout>
      <TabNavigator
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        leagueArray={leagueArray}
      />
      <div className="container">
        {generateCards().map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img src={card.imageUrl} alt={card.name} className="card-image" />
            </div>
            <h3 className="card-name">{card.name}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default VCT2025;
