import React from "react";

// css
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_Container">
      {/* EMAIL */}
      <section className="footerDetails">
        <i className="fas fa-envelope"></i>
        <span>jamesryanpagal5@gmail.com</span>
      </section>
      {/* PHONE */}
      <section className="footerDetails">
        <i className="fas fa-phone"></i>
        <span>0905-227-4639</span>
      </section>
      {/* GITHUB */}
      <section className="footerDetails">
        <i className="fab fa-github"></i>
        <span>https://github.com/jamesryanpagal</span>
      </section>
    </div>
  );
};

export default Footer;
