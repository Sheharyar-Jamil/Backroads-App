import React from "react";
import Data from "../Data";
import SocialLink from "../SocialLink";

const Footer = () => {
    return (
        <footer className="section footer">
        <ul className="footer-links">
            {Data.map((data) => {
                return(
                    <li key={data.id}>
            <a href={data.href} className="footer-link">{data.text}</a>
          </li>
                );
            })}
        </ul>
        <ul className="footer-icons">
            {SocialLink.map((link) => {
                return(
                    <li key={link.id}>
            <a href={link.href} target="_blank" rel="noreferrer" className="footer-icon"
              ><i className={link.icon}></i
            ></a>
          </li>
                )
            })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
      );
    };

export default Footer;