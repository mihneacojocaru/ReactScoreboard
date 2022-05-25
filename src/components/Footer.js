import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      Copyright &#169;2022{" "}
      <Link 
        to="home" 
        spy={true} 
        smooth={true} 
        offset={-90} 
        duration={500}
        className='footer__link'
        >Mihnea Cojocaru</Link>
      . All rights reserved
    </div>
  );
};

export default Footer;
