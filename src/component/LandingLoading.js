import React from "react";
import "./style/landingLoading.css";
import { Link } from "react-router-dom";


function LandingLoading() {



  return (
    <div className="text_loading active">


      <div className="text">
        <p className="parag">Welcome to <span>GIAPHER</span> </p>

      <h1>WE'RE ADVERTISING AGENCY</h1>

      <p >We are team of talented hiring agencies getting the best opportunities that will take you to your dreams</p>
        
        <div className="get_button">
          <button type=""><Link to="/register">Get Started</Link></button>
        </div>
      </div>
      

      <div className="overlay"></div>
    </div>
  );
}

export default LandingLoading;
