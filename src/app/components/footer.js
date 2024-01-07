import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="div-container">
                <section className="section-container">
                    <a className="media-button" href="#!">
                        <img className="media-icon" alt="" src="../assets/img/facebook.png"/>
                    </a>
                    <a className="media-button" href="#!">
                        <img className="media-icon" alt="" src="../assets/img/instagram.png"/>
                    </a>
                    <a className="media-button" href="#!">
                        <img className="media-icon" alt="" src="../assets/img/twitter.png"/>
                    </a>
                </section>
            </div>
            <div className="copyright">
                © 2024 Copyright Esports Calendar
            </div>
        </footer>
    );
}

export default Footer;