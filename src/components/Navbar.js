import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-scroll";
import {motion} from 'framer-motion';
import Cookies from "js-cookie";

import {LanguageContext} from './LanguageContext/LanguageProvider.js' 

import logo from '../assets/LOGO_NOBG.png';
import { navLinksEn,navLinksDe } from "../data.js";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [lang, setLang] = useContext(LanguageContext);

  let navLinks = lang ? navLinksEn : navLinksDe;

  const checkBox = () => {
    setLang(!lang);
    Cookies.set('language', !lang);
  }

  const [clicked, setClicked] = useState(false);

  const refreshPage = ()=>{
    window.location.reload();
 }

  useEffect(() => {
    if (clicked) document.body.style.overflow = "hidden";
    if (!clicked) document.body.style.overflow = "scroll";
  }, [clicked]);

  const clickHandler = (e) => {
    e.preventDefault();
    let obj = e.target;
    if (
      obj.classList.contains("navbar__hamburger") ||
      obj.parentElement.classList.contains("navbar__hamburger")
    ) {
      setClicked(true);
    } else if (
      obj.classList.contains("navbar__close") ||
      obj.parentElement.classList.contains("navbar__close")
    ) {
      setClicked(false);
    }
  };

  return (
    <header className="navbar__header">
      <nav className="navbar">
        <div className="navbar__logo" onClick={refreshPage}>
          <img className="navbar__logo--img" src={logo} alt="website logo"/>
        </div>
        <motion.div
          className={clicked ? "" : "navbar__items--hide"}
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <ul className="navbar__items">
            {navLinks.map((e) => (
              <li
                key={e.id}
                onClick={() => {
                  setClicked(false);
                }}
              >
                <Link to={e.url}
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      onClick={() => {
                          setClicked(false);
                        }}
                >{e.text}</Link>
              </li>
            ))}
            <label className="navbar__items--languageSwitch">
              <input type="checkbox" onChange={checkBox} 
              checked={!lang ? 'checked' : ''}/>
              <span className="navbar__items--languageSwitch--slider"></span>
            </label>
          </ul>
        </motion.div>
        <div className="navbar__content-toggle">
          {clicked ? (
            <AiOutlineClose className="navbar__close" onClick={clickHandler} />
          ) : (
            <BiMenuAltRight
              onClick={clickHandler}
              className="navbar__hamburger"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
