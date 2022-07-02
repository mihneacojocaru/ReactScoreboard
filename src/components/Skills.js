import React, {useContext} from "react";
import {BsDownload} from 'react-icons/bs';

import {frontendEl,backendEl,designEl} from './Skills_Info.js';

import { LanguageContext } from "./LanguageContext/LanguageProvider";

const Skills = () => {

  const [lang] = useContext(LanguageContext);

  return (
    <div id="skills" className="skills">
      <div className="skills__container">
        <section className="skills__title-section">
          <h2>{lang ? "My Skills" : "Meine Fähigkeiten" }</h2>
          <a href="https://mihneacojocaru.github.io/Lebenslauf/" target="_blank" rel="noreferrer"><BsDownload className="skills__title-section--icon"/>{lang ? "Download CV" : "Lebenslauf"}</a>
        </section>
        <section className="skills__sections">
          
          <div className="skills__sections--group">
            <h2>Frontend</h2>
            <div className="skills__sections--group--images">
              {frontendEl.map( (el,index) =>(<a key={index} href={el.website} target="_blank" rel="noreferrer">
              <div className="skills__sections--group--images-img1">
                <img src={el.icon} alt={el.alt} />
                <h3>{el.name}</h3>
              </div>
              </a> ))}
            </div>
          </div>
          <div className="skills__sections--group">
            <h2>Backend</h2>
            <div className="skills__sections--group--images">
            {backendEl.map( (el,index) =>(<a key={index} href={el.website} target="_blank" rel="noreferrer">
              <div className="skills__sections--group--images-img1">
                <img src={el.icon} alt={el.alt} />
                <h3>{el.name}</h3>
              </div>
              </a> ))}
            </div>
          </div>
          <div className="skills__sections--group">
            <h2>UI/UX Design</h2>
            <div className="skills__sections--group--images">
            {designEl.map( (el,index) =>(<a key={index} href={el.website} target="_blank" rel="noreferrer">
              <div className="skills__sections--group--images-img1">
                <img src={el.icon} alt={el.alt} />
                <h3>{el.name}</h3>
              </div>
              </a> ))}
            </div>
          </div>
        </section>
      </div>
      <div className="skills__divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="skills__divider--fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Skills;
