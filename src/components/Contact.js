import React,{useState,useEffect, useContext} from "react";
import emailjs from 'emailjs-com';

import { LanguageContext } from "./LanguageContext/LanguageProvider";

import {useNotification} from "./Notifications/NotificationProvider";
import validateInfo from './Utilities/validateInfo';


import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaXingSquare, FaFacebookSquare} from 'react-icons/fa';

const Contact = () => {

  const [lang,setLang] = useContext(LanguageContext);

  const dispatch = useNotification();

  const sendEmail = async (e) =>{

    e.preventDefault();

    try {
      const antwort = await emailjs.sendForm('service_o5138oh', 'template_ei03bwe', e.target, 'ljf6JQsxpSVnMjuCl');
      if(antwort.text == 'OK'){
        dispatch({
          type:"SUCCESS",
          message:"Ihre Nachricht wurde erfolgreich versendet. Vielen Dank!"
        })
      }
    } catch (error) {
      dispatch({
        type:"ERROR",
        message:"Ups! Ein Fehler ist aufgetreten!"
      })
      console.log(error)
    }

    e.target.reset();
    
  }

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(()=>{
    setErrors(validateInfo(values));
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validateInfo(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
    handleNotifyError();

    if (Object.keys(errors).length === 0 && isSubmitting) {

      await sendEmail(e);
      setValues({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  };

  const handleNotifyError = () =>{
    if(errors.name){
      dispatch({
        type:"ERROR",
        message:errors.name
      })
    }
    if(errors.email){
      dispatch({
        type:"ERROR",
        message:errors.email
      })
    }
    if(errors.message){
      dispatch({
        type:"ERROR",
        message:errors.message
      })
    }
  }

  return (
    <div id="contact" className="contact">
      <div className="contact__titleSection">
        <h2>{lang ? "Contact" : "Kontakt"}</h2>
        <p>{lang ? "Have a question or want to work together?" : "Haben Sie eine Frage oder möchten Sie zusammenarbeiten?"}</p>
      </div>
      <form onSubmit={handleSubmit} className="contact__emailForm">
        <input type="text" placeholder={lang ? "Name" : "Name"}  name="name" value={values.name} onChange={handleChange}/>
        <input type="text" placeholder={lang ? "Enter E-Mail" :"E-Mail eingeben"} name="email" value={values.email} onChange={handleChange}/>
        <textarea placeholder={lang ? "Your Message" : "Ihre Nachricht"} name="message" value={values.message} onChange={handleChange}></textarea>
        <div className="contact__emailForm--btnContainer">
          <button>{lang ? "Send" : "Senden"}</button>
        </div>
      </form>
      <div className="contact__sideLinks">
        <a href="https://linkedin.com/in/mihnea-cojocaru-68821151/" target="_blank" rel="noreferrer" className="contact__sideLinks--linkedIn">
          <BsLinkedin/>
        </a>
        <a href="https://xing.com/profile/Mihnea_Cojocaru/cv" target="_blank" rel="noreferrer" className="contact__sideLinks--xing">
          <FaXingSquare/>
        </a>
        <a href="https://github.com/mihneacojocaru" target="_blank" rel="noreferrer" className="contact__sideLinks--github">
          <BsGithub/>
        </a>
        <a href="https://www.facebook.com/mihnea.co/" target="_blank" rel="noreferrer" className="contact__sideLinks--facebook">
          <FaFacebookSquare/>
        </a>
      </div>
      {/* <div className="contact__divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="contact__divider--fill"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Contact;
