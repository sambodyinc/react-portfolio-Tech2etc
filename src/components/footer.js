import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#ebf6ff", marginRight: "2rem" }}
            />
            <div>
              <p>14 Drive, Uthiru.</p>
              <p>Nairobi.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#ebf6ff", marginRight: "2rem" }}
              />{" "}
              254-112-883017
            </h4>
          </div>

          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#ebf6ff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the developer</h4>
          <p>
            This is Samuel Omondi. Lead Developer, CEO & Founder of SamBody Inc. I enjoy
            creating new projects from design challenges.
          </p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ebf6ff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ebf6ff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ebf6ff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
