import React from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import valBG from '../assets/img/valorant.jpg';
import './home.css'

const HomePage = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="image-container">
                <img alt="valbg" src={valBG}/>
                <div className="gradient-overlay">
                    <h1>Starts browsing for tournaments using the links below.</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;