import React, { useState } from "react";
import "../Styles/AboutMe.css";
import GHLogo from "../Pictures/icons8-github-64.png";
import IGLogo from "../Pictures/icons8-instagram-64.png";
import EmailLogo from "../Pictures/icons8-mail-64.png";
import LILogo from "../Pictures/icons8-linkedin-64.png";

import WGHLogo from "../Pictures/white-icons8-git-64.png";
import WIGLogo from "../Pictures/white-icons8-instagram-64.png";
import WEmailLogo from "../Pictures/white-icons8-mail-64.png";
import WLILogo from "../Pictures/white-icons8-linkedin-64.png";

const popupStyle = {
     position: "fixed",
     backgroundColor: "#3466AA",
     width: "9vw",
     top: "10vh",
     paddingTop:"2vh",
     paddingBottom:"2vh",
     fontFamily: "'Courier New', Courier, monospace",
     right: "calc(45vw)",
     textAlign:"center",
     borderRadius: "20px"
}
const AboutMe = (props) => {
     const [showPopup, setShowpopup] = useState(false);

     const copyEmail = (event) => {
          event.preventDefault()
          navigator.clipboard.writeText("maged.armanios@yahoo.com")
          setShowpopup(true);
          setTimeout(() => { setShowpopup(false) }, 2000);

     }
     return (
          <div className={props.theme === "Day" ? "AboutMe":"AboutMe Night" }>
               {showPopup && <div className="Popup" style={popupStyle}>
                    Emailed Copied to Clipboard!
               </div>}
               <h1 className="AboutMeTitle">Aspiring Software & FullStack Engineer</h1>

               <h2 className="AboutMeSubtitle">My Story So Far...</h2>
               <p className="AboutMeText">
                    Hi! I am <b>Maged Armanios</b>. I was born in Cairo, Egypt and emmigrated to Saudi Arabia at the age of 5 then Canada at the age of 6.
                    I spent the rest of years growing up in the <b>Greater Toronto Area (GTA)</b>.
                    Throughout elementary school I was always more reserved and prefer to spend my freetime playing video games and when I got access to a computer, computer games, which I believe led me to my interests in computers and software.
                    I am now in my third year studying <b>Software Engineering at McMaster University</b> and am pursuing a career in <b>Fullstack Development</b>.
               </p>

               <h2 className="AboutMeSubtitle">Skills</h2>
               <p className="AboutMeText">
                    <b>WebDevelopment</b>: HTML, CSS, JS, node.js, React, EJS, RestAPI, Express, Django <br />
                    <b>Languages</b>: Python, Java, JS, C#, C <br />
                    <b>Developer Tools</b>: Git, VS Code, IntelliJ, Postman, Netlify, FIGMA <br />
                    <b>Libraries</b>: Panda, Numpy, MatplotLIB <br />
               </p>

               <h2 className="AboutMeSubtitle">Interests</h2>
               <p className="AboutMeText">
                    Some of my personal interests include video games, my favorites being God of War 4 and Minecraft.
                    I've also always been a big fan of trading card games including Pokémon, YU-GI-OH, and LOR.
                    My favorite music genres are Hip-hop, rap, and pop with my top artists including Postmalone, Justin Beiber, and Migos.
                    Also, i'm a big fan of Onepiece :)
               </p>

               <h2 className="AboutMeSubtitle">Contact Me</h2>
               <div className="LogoHolder">
                    <a href="https://www.linkedin.com/in/maged-armanios/" rel="noreferrer" target="_blank"><img src={props.theme === "Day" ? LILogo: WLILogo } alt="Linked In Logo" /></a>
                    <a href="https://github.com/marmanios" rel="noreferrer" target="_blank"><img src={props.theme === "Day" ? GHLogo: WGHLogo }alt="Github Logo" /></a>
                    <a href="https://www.instagram.com/maged_armanios/" rel="noreferrer" target="_blank"><img src={props.theme === "Day" ? IGLogo: WIGLogo} alt="Instagram Logo" /></a>
                    <a href="www.google.com" onClick={copyEmail}><img src={props.theme === "Day" ? EmailLogo:WEmailLogo } alt="Email Logo" rel="noreferrer" target="_blank" /></a>




               </div>
          </div >
     )
}
export default AboutMe;