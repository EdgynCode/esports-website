import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'
import PlayerDTO from '../models/playerDTO';
import axios from 'axios';

const Contract = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/server');
            const data = await response.json();
            setData(data);
        };

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
                            <td>{row.league}</td>
                            <td>{row.team}</td>
                            <td>{row.summonername}</td>
                            <td>{row.position}</td>
                            <td>{row.name}</td>
                            <td>{row.firstname}</td>
                            <td>{row.nationality}</td>
                            <td>{row.enddate}</td>
                            <td>{row.residency}</td>
                            <td>{row.status}</td>
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
