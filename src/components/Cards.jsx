import React from "react";
import "../styles/cards/cards.css";

const Cards = () => {
   return (
      <div className="cards-container">
         <div className="card">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017912/images-sprint3-reto1/icon-access-anywhere_gatzve.svg"
               alt=""
            />
            <h3>Access your files, anywhere</h3>
            <span>
               The ability to use a smartphone, tablet, or computer to access your account means
               your files follow you everywhere.
            </span>
         </div>
         <div className="card">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017912/images-sprint3-reto1/icon-security_fmqaw7.svg"
               alt=""
            />
            <h3>Security you can trust</h3>
            <span>
               2-factor authentication and user-controlled encryption are just a couple of the
               security features we allow to help secure your files.
            </span>
         </div>
         <div className="card">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017916/images-sprint3-reto1/icon-collaboration_y7w8dc.svg"
               alt=""
            />
            <h3>Real-time collaboration</h3>
            <span>
               Securely share files and folders with friends, family and colleagues for live
               collaboration. No email attachments required.
            </span>
         </div>
         <div className="card">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017915/images-sprint3-reto1/icon-any-file_c3h2bf.svg"
               alt=""
            />
            <h3>Store any type of file</h3>
            <span>
               Whether you're sharing holiday photos of work documents, Fylo has you covered
               allowing for all file types to be securely stored and shared.
            </span>
         </div>
      </div>
   );
};

export default Cards;
