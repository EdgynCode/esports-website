import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'

const Contract = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
          .then((response) => response.json())
          .then((result) => setData(result))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    return (
        <div>
            <Navbar />
            <div className="tab-container">
                <div className="half-width-div">
                    League of Legends
                </div>
                <div className="half-width-div">
                    Valorant
                </div>
            </div>
            
            <table className="table-style">
                <tr>
                    <th className="table-header-style">League</th>
                    <th className="table-header-style">Team</th>
                    <th className="table-header-style">Official Summoner Name</th>
                    <th className="table-header-style">Position</th>
                    <th className="table-header-style">Legal Family Name</th>
                    <th className="table-header-style">Legal First Name</th>
                    <th className="table-header-style">End Date (Month, Day, Year)</th>
                    <th className="table-header-style">Residency</th>
                    <th className="table-header-style">Status</th>
                    <th className="table-header-style">Tricode</th>
                    <th className="table-header-style">Team Contact</th>
                </tr>
                
            </table>
            <Footer/>
        </div>
    );
}
export default Contract;
