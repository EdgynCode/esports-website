import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'
import { fetchLeagueData } from '../../api/data';
// import PlayerDTO from '../models/playerDTO';

const Contract = () => {
    const [leagueData, setLeagueData] = useState([]);

    useEffect(() => {
        getLeagueData();
    });

    const getLeagueData = async () => {
        const data = await fetchLeagueData();
        setLeagueData(data);
    }
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
                        <th className="table-header-style">In-game Name</th>
                        <th className="table-header-style">Position</th>
                        <th className="table-header-style">Name</th>
                        <th className="table-header-style">First Name</th>
                        <th className="table-header-style">Nationality</th>
                        <th className="table-header-style">Contract End Date</th>
                        <th className="table-header-style">Residency</th>
                        <th className="table-header-style">Status</th>
                        <th className="table-header-style">Tricode</th>
                        <th className="table-header-style">Team Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {leagueData.map((contract) => (
                        <tr key={contract.id}>
                            <td>{contract.league.slice(-3)}</td>
                            <td>{contract.team}</td>
                            <td>{contract.summonername}</td>
                            <td>{contract.position}</td>
                            <td>{contract.name}</td>
                            <td>{contract.firstname}</td>
                            <td>{contract.nationality}</td>
                            <td>{new Date(contract.enddate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                            </td>
                            <td>{contract.residency === 1 ? 'Resident' : 'Non-resident'}</td>
                            <td>{contract.status === 1 ? 'Active' : 'Inactive'}</td>
                            <td>{contract.tricode}</td>
                            <td>{contract.teamcontact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
}

export default Contract;
