import React from "react";
import "../styles/Footer.css"; // you can style it separately if needed

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h4>WORKING HOURS</h4>
          <p>Please contact us 24 x 7 for any requirements.</p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <a href="/terms">TERMS AND CONDITIONS</a>
          <a href="/privacy">PRIVACY POLICY</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Abi Pulp & Paper Equipments. All rights reserved.
      </div>
    </footer>
  );
}