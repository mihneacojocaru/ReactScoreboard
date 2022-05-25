import React, { useEffect, useState, useContext } from "react";

import { motion, AnimatePresence } from "framer-motion";
import projects from "./Work_Info.js";

import { LanguageContext } from "./LanguageContext/LanguageProvider";

const Work = () => {

  const [lang,setLang] = useContext(LanguageContext);

  const [type, setType] = useState("all");
  const [filtered, setFiltered] = useState(projects);

  const [active, setActive] = useState("1");

  const buttons = [
    {
      id: "1",
      type: "all",
      name: lang ? "All Projects" : "Alle Projekte",
    },
    {
      id: "2",
      type: "bootstrap",
      name: "Bootstrap",
    },
    {
      id: "3",
      type: "landing",
      name: "Landing Pages",
    },
    {
      id: "4",
      type: "javascript",
      name: "Javascript",
    },
    {
      id: "5",
      type: "react",
      name: "React",
    },
  ];

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

  useEffect(() => {
    if (type == "all") {
      setFiltered(projects);  
    } else {
      setFiltered(projects.filter((e) => e.type == type));
    }
  }, [type]);

  return (
    <div className="work">
      <section className="work__title">
        <h2>{lang ? "My Work" : "Meine Projekte"}</h2>
      </section>
      <section className="work__container">
        <div className="work__container--buttons">
          {buttons.map((e) => (
            <button
              key={e.id}
              onClick={() => {
                setType(e.type);
                setActive(e.id);
              }}
              className={e.id == active ? "active-btn" : "non-active"}
            >
              {e.name}
            </button>
          ))}
        </div>

        <motion.div
          layout="size"
          transition={{ layout: { duration: 1.5 } }}
          className="work__container--cards"
        >
          <AnimatePresence>
            {filtered.map((e, index) => (
              <motion.div
                layout="size"
                transition={{ layout: { duration: 1.5 } }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key={index}
                className="work__container--cards--card"
              >
                <img src={e.url} alt={e.name} />
                <div className="work__container--cards--card__overlay work__container--cards--card__overlay--blurr">
                  <h2 className="work__container--cards--card__title">{e.name}</h2>
                  <a href={e.website} target="_blank" rel="noreferrer"><button>Visit Website</button></a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <div className="work__divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="work__divider--fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Work;
