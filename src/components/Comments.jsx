import React from "react";
import "../styles/comments/comments.css";

const Comments = () => {
   return (
      <div className="comments">
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017914/images-sprint3-reto1/bg-quotes_hr8j1c.png"
            alt=""
            className="quotes"
         />
         <div className="comment-card">
            <span>
               Fylo has improved our team productivity by and order of magnitude. Since making the
               switch our team has become a well-oiled collaboration machine.
            </span>
            <div className="comment-user">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017914/images-sprint3-reto1/profile-1_e9ebui.jpg"
                  alt=""
               />
               <div className="user-info">
                  <h5>Satish Patel</h5>
                  <p>Founder and CEO, Huddle</p>
               </div>
            </div>
         </div>
         <div className="comment-card">
            <span>
               Fylo has improved our team productivity by and order of magnitude. Since making the
               switch our team has become a well-oiled collaboration machine.
            </span>
            <div className="comment-user">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017915/images-sprint3-reto1/profile-2_otihpo.jpg"
                  alt=""
               />
               <div className="user-info">
                  <h5>Bruce McKenzie</h5>
                  <p>Founder and CEO, Huddle</p>
               </div>
            </div>
         </div>
         <div className="comment-card">
            <span>
               Fylo has improved our team productivity by and order of magnitude. Since making the
               switch our team has become a well-oiled collaboration machine.
            </span>
            <div className="comment-user">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646017915/images-sprint3-reto1/profile-3_qy7sb5.jpg"
                  alt=""
               />
               <div className="user-info">
                  <h5>Iva Boyd</h5>
                  <p>Founder and CEO, Huddle</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Comments;
