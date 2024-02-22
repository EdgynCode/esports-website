import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'

const Contract = () => {
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
                    
                </tbody>
            </table>
            <Footer/>
        </div>
    );
}

export default Contract;
