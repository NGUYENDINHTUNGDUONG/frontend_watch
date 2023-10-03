import React from "react";
import "./FooterLinks.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <FaFacebookF className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Tùng Dương</h2>
          <a href="#home" className="btn btn-dark">
            Trò chuyện
          </a>
        </div>
      </section>
      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src="{}" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLinks;
