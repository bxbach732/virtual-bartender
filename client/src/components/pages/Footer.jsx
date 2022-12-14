import React from "react";

// render sticky footer in all pages
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">{`Copyright © Virtual Bartender ${year}`}</footer>
  );
};

export default Footer;
