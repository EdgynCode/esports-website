import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'
import PlayerDTO from '../models/playerDTO';

const Contract = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://ep-sweet-fire-a4ltm0p5.us-east-1.aws.neon.tech', {
                headers: {
                    Accept: "application/json"
                }
            });
            const jsonData = await response.json();
            
            // Convert API response data to DTO objects
            const playerDTOs = jsonData.map((player) => {
                return new PlayerDTO(
                    player.league,
                    player.team,
                    player.summonername,
                    player.position,
                    player.name,
                    player.firstname,
                    player.nationality,
                    player.enddate,
                    player.residency,
                    player.status,
                    player.tricode,
                    player.teamcontact
                );
            });
    
            setData(playerDTOs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        fetchData();
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
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.league.slice(-3)}</td>
                            <td>{row.team}</td>
                            <td>{row.summonername}</td>
                            <td>{row.position}</td>
                            <td>{row.name}</td>
                            <td>{row.firstname}</td>
                            <td>{row.nationality}</td>
                            <td>{new Date(row.enddate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                            </td>
                            <td>{row.residency === 1 ? 'Resident' : 'Non-resident'}</td>
                            <td>{row.status === 1 ? 'Active' : 'Inactive'}</td>
                            <td>{row.tricode}</td>
                            <td>{row.teamcontact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
}

export default Contract;
