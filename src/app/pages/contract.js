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
                <thead>
                    <tr>
                        <th className="table-header-style">League</th>
                        <th className="table-header-style">Team</th>
                        <th className="table-header-style">Official Summoner Name</th>
                        <th className="table-header-style">Position</th>
                        <th className="table-header-style">Legal Family Name</th>
                        <th className="table-header-style">Legal First Name</th>
                        <th className="table-header-style">Nationality</th>
                        <th className="table-header-style">End Date (Month, Day, Year)</th>
                        <th className="table-header-style">Residency</th>
                        <th className="table-header-style">Status</th>
                        <th className="table-header-style">Tricode</th>
                        <th className="table-header-style">Team Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.league}</td>
                            <td>{row.team}</td>
                            <td>{row.INGAMENAME}</td>
                            <td>{row.POSITION}</td>
                            <td>{row.NAME}</td>
                            <td>{row.FIRSTNAME}</td>
                            <td>{row.nationality}</td>
                            <td>{row.CONTRACTENDDATE}</td>
                            <td>{row.RESIDENCY}</td>
                            <td>{row.STATUS}</td>
                            <td>{row.tricode}</td>
                            <td>{row.TEAMCONTACT}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer/>
        </div>
    );
}
export default Contract;
