import React from "react";
import "./Footer.css";
import fb from "../image/fbimge.png";
import twitter from "../image/twitterimge.png";
import Linkedin from "../image/linkedinimge.png";
import Instgram from "../image/instaimge.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer_links_div">
            <h4>For Business</h4>
            <a href="/aboutus "> AboutUs</a>
            <a href="/Contact">Contact</a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Resources</h4>
            <a href="/aboutus">AboutUs</a>
            <a href="/Contact">Contact</a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Social Media:</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="facebook_profile"></img>
              </p>
              <p>
                <img src={twitter} alt="facebook_profile"></img>
              </p>
              <p>
                <img src={Linkedin} alt="facebook_profile"></img>
              </p>
              <p>
                <img src={Instgram} alt="facebook_profile"></img>
              </p> 
               
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="sb_footer_below">
        <div className="sb_footer_copyright">
          <p>@{new Date().getFullYear()} Fatima copyright reserved.</p>
        </div>
        <div className="sb_footer_below_links">
          <a href="/terms">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/cookie">
            <div>
              <p>Cookies Declaration</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Footer;