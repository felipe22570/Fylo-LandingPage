import React from "react";
import Cards from "../components/Cards";
import Comments from "../components/Comments";
import Email from "../components/Email";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SecMain from "../components/SecMain";

const App = () => {
   return (
      <div>
         <Navbar />
         <Main />
         <Cards />
         <SecMain />
         <Comments />
         <Email />
         <Footer />
      </div>
   );
};

export default App;
