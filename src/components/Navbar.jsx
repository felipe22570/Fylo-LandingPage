import React from "react";
import "../styles/navbar/navbar.css";

const Navbar = () => {
   return (
      <div className="navbar">
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017914/images-sprint3-reto1/logo_pbxkla.svg"
            alt=""
         />
         <nav>
            <a href="/">Features</a>
            <a href="/">Team</a>
            <a href="/">Sign In</a>
         </nav>
      </div>
   );
};

export default Navbar;
