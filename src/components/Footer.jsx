import React from "react";
import "../styles/footer/footer.css";
import iconSet from "../styles/selection.json";

import IcomoonReact from "icomoon-react";

const Footer = () => {
   return (
      <div className="footer">
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017914/images-sprint3-reto1/logo_pbxkla.svg"
            alt=""
            className="fylo"
         />
         <br />
         <div className="footer-info">
            <div className="ubication">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017912/images-sprint3-reto1/icon-location_d9zujj.svg"
                  alt=""
               />
               <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum culpa
                  accusamus doloribus quam obcaecati quibusdam.
               </span>
            </div>
            <div className="contact">
               <div className="element">
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017912/images-sprint3-reto1/icon-phone_algd7s.svg"
                     alt=""
                  />
                  <span>+1-543-123-4567</span>
               </div>
               <div className="element">
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017912/images-sprint3-reto1/icon-email_tbtzc1.svg"
                     alt=""
                  />
                  <span>example@fylo.com</span>
               </div>
            </div>
            <div className="about-us">
               <span>About us</span>
               <span>Jobs</span>
               <span>Press</span>
               <span>Blogs</span>
            </div>
            <div className="contact-us">
               <span>Contact us</span>
               <span>Terms</span>
               <span>Privacy</span>
            </div>
            <div className="icons">
               <span>
                  <IcomoonReact
                     className="icon"
                     iconSet={iconSet}
                     color="white"
                     size="1rem"
                     icon="facebook2"
                  />
               </span>
               <span>
                  <IcomoonReact
                     className="icon"
                     iconSet={iconSet}
                     color="white"
                     size="1rem"
                     icon="twitter"
                  />
               </span>
               <span className="icon">
                  <IcomoonReact iconSet={iconSet} color="white" size="1rem" icon="instagram" />
               </span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
