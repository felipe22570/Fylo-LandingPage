import React from "react";
import "../styles/secmain/secmain.css";

const SecMain = () => {
   return (
      <div className="sec-main">
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017914/images-sprint3-reto1/illustration-stay-productive_hbx37j.png"
            alt=""
            className="imagen"
         />
         <div className="text">
            <h1>Stay productive, wherever you are</h1>
            <span>
               Never let location be an issue when accessing your files, Fylo has you covered for
               all of your file storage needs.
            </span>
            <span>
               Securely share files and folders with friends, family and colleagues for live
               collaboration. No email attachments required.
            </span>
            <a href="/">
               See how Fylo works{" "}
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017915/images-sprint3-reto1/icon-arrow_vy6dmz.svg"
                  alt=""
               />
            </a>
         </div>
      </div>
   );
};

export default SecMain;
