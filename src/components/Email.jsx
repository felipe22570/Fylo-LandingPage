import { useFormik } from "formik";
import React, { useState } from "react";
import "../styles/email/email.css";

const Email = () => {
   const [validate, setValidate] = useState("hidden");

   const verificarCorreo = (email) => {
      const expReg =
         /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      const valido = expReg.test(email);

      if (!valido) {
         setValidate("show");
      } else {
         setValidate("hidden");
      }
   };

   const formik = useFormik({
      initialValues: {
         email: "",
      },
      onSubmit: (data) => {
         verificarCorreo(data.email);
      },
   });

   return (
      <div className="email">
         <h1>Get early access today</h1>
         <span>
            It only takes a minute to sign up and our free starter tier is extremely generous. If
            you have any questions, our support team would be happy to help you.{" "}
         </span>
         <form className="form-email" onSubmit={formik.handleSubmit}>
            <input type="text" name="email" id="" onChange={formik.handleChange} />
            <button type="submit">Get started for free</button>
         </form>
         <p className={validate} style={{ fontSize: "0.7rem", color: "hsl(0, 100%, 63%)" }}>
            Please enter a valid email address
         </p>
      </div>
   );
};

export default Email;
