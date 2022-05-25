import React, {useEffect,useContext} from "react";

import { LanguageContext } from "./LanguageContext/LanguageProvider";

import AOS from 'aos';
import 'aos/dist/aos.css';

import mihnea from '../assets/mihnea_new02.jpg';

import {MdSpeed, MdDevices} from 'react-icons/md';
import {FaRegLightbulb} from 'react-icons/fa';
import {BiRocket} from 'react-icons/bi';
import {BsDownload} from 'react-icons/bs';

import { aboutInfo } from "../data";

const About = () => {

  useEffect(()=>{
    AOS.init({
      duration:2500, 
      delay:150,
      once: true,
    });

  },[])

  const [lang,setLang] = useContext(LanguageContext);

  return (
    <div id="about" className="about">
      <section className="about__title-section">
        <h2>{lang ? aboutInfo[0].about_title_en : aboutInfo[0].about_title_de}</h2>
      </section>
      <section className="about__info">
        <div className="about__image">
          <img src={mihnea} alt="guy looking at the screen" />
          <div className="about__image--downloadCV">
              <a href="https://mihneacojocaru.github.io/Lebenslauf/" target="_blank" rel="noreferrer"><BsDownload className="about__image--downloadCV--icon"/>{lang ? aboutInfo[0].about_cv_down_en : aboutInfo[0].about_cv_down_de}</a>
          </div>
        </div>
        <div className="about__description">
          <p className="about__description--p1">{lang ? aboutInfo[0].about_desc_p11_en : aboutInfo[0].about_desc_p11_de}<mark>Mihnea Cojocaru</mark>{lang ? aboutInfo[0].about_desc_p12_en : aboutInfo[0].about_desc_p12_de}
          </p>
          <p className="about__description--p2">
          {lang ? aboutInfo[0].about_desc_p21_en : aboutInfo[0].about_desc_p21_de} <br />  <mark>Web Applications and Coding</mark> {lang ? aboutInfo[0].about_desc_p22_en : aboutInfo[0].about_desc_p22_de}
          </p>
        </div>
      </section>
      <section className="about__elements">
        <div data-aos="fade-in" className="about__elements--item">
          <div className="about__elements--item-icon">
            <MdSpeed/>
          </div>
          <h2>{lang ? aboutInfo[0].about_el1_t_en : aboutInfo[0].about_el1_t_de}</h2>
          <p>{lang ? aboutInfo[0].about_el1_p_en : aboutInfo[0].about_el1_p_de}</p>
        </div>
        <div data-aos='zoom-in-left' className="about__elements--item">
          <div className="about__elements--item-icon">
            <MdDevices/>
          </div>
          <h2>{lang ? aboutInfo[0].about_el2_t_en : aboutInfo[0].about_el2_t_de}</h2>
          <p>{lang ? aboutInfo[0].about_el2_p_en : aboutInfo[0].about_el2_p_de}</p>
        </div>
        <div data-aos='zoom-in-right' className="about__elements--item">
          <div className="about__elements--item-icon">
            <FaRegLightbulb/>
          </div>
          <h2>{lang ? aboutInfo[0].about_el3_t_en : aboutInfo[0].about_el3_t_de}</h2>
          <p>{lang ? aboutInfo[0].about_el3_p_en : aboutInfo[0].about_el3_p_de}</p>
        </div>
        <div data-aos='flip-right' className="about__elements--item">
          <div className="about__elements--item-icon">
            <BiRocket/>
          </div>
          <h2>{lang ? aboutInfo[0].about_el4_t_en : aboutInfo[0].about_el4_t_de}</h2>
          <p>{lang ? aboutInfo[0].about_el4_p_en : aboutInfo[0].about_el4_p_de}</p>
        </div>
      </section>
      <div className="about__divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 2 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="about__divider--fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
