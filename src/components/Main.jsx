import React from "react";
import "../styles/main/main.css";

const Main = () => {
   return (
      <div className="main-cont">
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017916/images-sprint3-reto1/illustration-intro_dzbnty.png"
            alt=""
         />
         <span className="main-title">
            All your files in one secure location, accesible anywhere.
         </span>
         <span className="main-text">
            Fylo stores all your most important files in one secure location. Access them anywhere
            you need, share and colaborate with friends, family, and co-workers.
         </span>
         <button>Get started</button>
      </div>
   );
};

export default Main;
