import React from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Contract = () => {
    return (
        <div>
            <Navbar />
            <table style={{borderCollapse: 'collapse', width: '100%'}}>
                <tr>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>League</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Team</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Official Summoner Name</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Position</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Legal Family Name</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Legal First Name</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>End Date (Month, Day, Year)</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Residency</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Status</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Tricode</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Team Contact</th>
                </tr>
                
            </table>
            <Footer/>
        </div>
    );
}


export default Contract;