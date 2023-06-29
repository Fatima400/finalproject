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
                <a href="https://www.facebook.com/profile.php?id=100023563097762">
                  <img src={fb} alt="facebook_profile" />
                </a>
              </p>
              <p>
                <a href="https://twitter.com/your-twitter-profile">
                  <img src={twitter} alt="twitter_profile" />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/fatima-khalil/">
                  <img src={Linkedin} alt="linkedin_profile" />
                  </a>
              </p>
              <p>
                <a href="https://www.instagram.com/fkhalil440/">
                  <img src={Instgram} alt="instagram_profile" />  
                  </a>
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