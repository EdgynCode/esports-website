import React from "react";
import facebookIcon from "../assets/img/facebook.png";
import instagramIcon from "../assets/img/instagram.png";
import twitterIcon from "../assets/img/twitter.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="div-container">
        <section className="section-container">
          <a className="media-button" href="#!">
            <img className="media-icon" alt="" src={facebookIcon} />
          </a>
          <a className="media-button" href="#!">
            <img className="media-icon" alt="" src={instagramIcon} />
          </a>
          <a className="media-button" href="#!">
            <img className="media-icon" alt="" src={twitterIcon} />
          </a>
        </section>
      </div>
      <div className="copyright">© 2024 Copyright Esports Calendar</div>
    </footer>
  );
};

export default Footer;
