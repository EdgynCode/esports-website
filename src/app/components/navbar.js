import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <nav className="topnav">
            <a className={`nav-link ${selectedTab === "Home" ? "active" : ""}`} onClick={() => setSelectedTab("Home")}
            href="/home">Home</a>
            <a className={`nav-link ${selectedTab === "Schedule" ? "active" : ""}`} onClick={() => setSelectedTab("Schedule")}
            href="/schedule">Schedule</a>
            <a className={`nav-link ${selectedTab === "Global Contract Database" ? "active" : ""}`} onClick={() => setSelectedTab("Global Contract Database")}
            href="/contract">Global Contract Database</a>
        </nav>
    );
}

export default Navbar;