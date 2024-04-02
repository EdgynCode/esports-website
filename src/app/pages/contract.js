import React from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'
import { fetchLeagueData } from '../../api/server';
// import PlayerDTO from '../models/playerDTO';

const Contract = async () => {
    const leagueData = await fetchLeagueData();

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
                    {leagueData.map((leagueData) => (
                        <tr key={leagueData.id}>
                            <td>{leagueData.league.slice(-3)}</td>
                            <td>{leagueData.team}</td>
                            <td>{leagueData.summonername}</td>
                            <td>{leagueData.position}</td>
                            <td>{leagueData.name}</td>
                            <td>{leagueData.firstname}</td>
                            <td>{leagueData.nationality}</td>
                            <td>{new Date(leagueData.enddate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                            </td>
                            <td>{leagueData.residency === 1 ? 'Resident' : 'Non-resident'}</td>
                            <td>{leagueData.status === 1 ? 'Active' : 'Inactive'}</td>
                            <td>{leagueData.tricode}</td>
                            <td>{leagueData.teamcontact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
}

export default Contract;
