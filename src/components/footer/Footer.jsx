import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering students with practical digital skills for a better
              future.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Courses</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>
            <p>Phone: +234 800 000 0000</p>
            <p>Owerri, Imo State</p>
          </div>
        </div>

        <div className="copyright">
          <p>© 2026 Our Digital Skills Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
