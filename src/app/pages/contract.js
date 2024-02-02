import React from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './contract.css'

const Contract = () => {
    return (
        <div>
            <Navbar />
            <table className="table-style">
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
                
            </table>
            <Footer/>
        </div>
    );
}


export default Contract;
