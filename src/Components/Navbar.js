import React from "react";
import "../Styles/Navbar.css";
//<button onClick={props.openResume} className="NavbarButton">Resume</button>
const Navbar = (props) => {

     const onClickHandler = (event) => {
          props.changePage(event.target.value);
     };

     

     return (
          <div className="Navbar">
               <button onClick={onClickHandler} value="SplashScreen" className="NavbarButton">Home</button>
               <button onClick={onClickHandler} value="AboutMe" className="NavbarButton">About Me</button>
               <button onClick={onClickHandler} value="MyProjects" className="NavbarButton">My Projects</button>
               
          </div>
     )
};

export default Navbar;