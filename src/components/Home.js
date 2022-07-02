import React, { useEffect, useContext } from "react";

import {LanguageContext} from './LanguageContext/LanguageProvider.js'

import { motion } from "framer-motion";
import { Link } from "react-scroll";

import {BsFillArrowRightCircleFill} from 'react-icons/bs';

import man from "../assets/Mann_am_Komputer.svg";
import circle from "../assets/eclipse_bg.png";
import reactImg from "../assets/react.png";
import sassImg from "../assets/sass.png";
import nodeImg from "../assets/node.png";

import { homeTexts } from "../data";

const Home = () => {

  const [lang] = useContext(LanguageContext);


  useEffect(()=>{
    console.log(
			"%cLooking for something specific in here? \nThen E-mail me about it! \nmihnea.co@gmail.com",
			"background-color: seagreen; color: white ;" +
			"font-size: 18px ;" +
			"font-family: 'Helvetica' ; text-shadow: 1px 1px 7px black ;"
		);
  },[])

  const scaleVariants = {
    whileInView: {
      scale: [0.4, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="home">
      <div className="home__container">
        <div className="home__content">
          <p className="home__firstPTag">{lang ? homeTexts[0].hi_en : homeTexts[0].hi_de}</p>
          <p className="home__name">{homeTexts[0].name}</p>
          <p className="home__whatIDo">{lang ? homeTexts[0].whatIDo_en : homeTexts[0].whatIDo_de}</p>
          <p className="home__description">
          {lang ? homeTexts[0].desc_en : homeTexts[0].desc_de}
          </p>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="home__button"
          >
            {lang ? homeTexts[0].viewWork_en : homeTexts[0].viewWork_de}
            <BsFillArrowRightCircleFill className="home__button--arrow"/>
          </Link>
        </div>
        <div className="home__drawing">
          <img src={man} alt="Mann am Pc" />
          <motion.img
            className="home__backgroundCircle"
            src={circle}
            alt="Background circle"
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
          />
          <motion.img
            src={reactImg}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="home__reactCircle"
          />
          <motion.img
            src={sassImg}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="home__sassCircle"
          />
          <motion.img
            src={nodeImg}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            className="home__nodeCircle"
          />
        </div>
      </div>
      <div className="home__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
