import React, { createContext, useState,useEffect } from "react";
import Cookies from "js-cookie";


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState(false);

  useEffect(() => {
    
    if (Cookies.get("language")) {
      setLang(JSON.parse(Cookies.get("language")));
    }

  }, []);

  return (
    <LanguageContext.Provider value={[lang, setLang]}>{children}</LanguageContext.Provider>
  );
};