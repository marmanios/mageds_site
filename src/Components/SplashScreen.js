import React, { useState, useEffect } from "react";
import "../Styles/SplashScreen.css";

const SplashScreen = (props) => {

     //ChangePage
     const onClickHandler = (event) =>{
          event.preventDefault();
          props.changePage(event.target.value);
     }

     //UseStates For Animation
     const [text, setText] = useState("");
     const fullText = ("Maged Armanios");
     const [index, setIndex] = useState(0);

     useEffect(() => {
          //Fill Out Text
          if (index < fullText.length) {
               setTimeout(() => {
                    setText(fullText.slice(0, index + 1) + "_")
                    setIndex(index + 1)
               }, 90)
          }
          //Blinking _
          else if (index === fullText.length) {
               setTimeout(() => {
                    setText(fullText + " ")
                    setIndex(index + 1)
               }, 700)
          }
          else {
               setTimeout(() => {
                    setText(fullText + "_")
                    setIndex(index - 1)
               }, 700)
          }
     }, [index])

     return (
          <div className="SplashScreen">
               <h3 className={props.theme === "Day" ? "SplashScreenTextSmall":"SplashScreenTextSmall Night" }>Hi, I am</h3>
               <h1 className="SplashScreenText">{text}</h1>
               <button value={"AboutMe"} onClick={onClickHandler} className="SplashScreenButton">ABOUT ME</button>
               <button value={"MyProjects"} onClick={onClickHandler} className="SplashScreenButton">MY PROJECTS</button>
               <button value={"Resume"} onClick={props.openResume} className="SplashScreenButton">RESUME</button>
          </div>
     )
}
export default SplashScreen;