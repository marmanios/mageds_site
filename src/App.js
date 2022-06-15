import './App.css';
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ParticleBackground from './Components/ParticleBackground';
import SplashScreen from './Components/SplashScreen';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Resume from "./Maged's Resume.pdf";

import dayIcon from "./Pictures/icons8-sun-30.png";
import nightIcon from "./Pictures/icons8-night-30.png";

function App() {
  const [state, setState] = useState("SplashScreen");
  const [theme, setTheme] = useState("Day");
  const [icon, setIcon] = useState(nightIcon);

  const changePage = (newState) => {
    setState(newState);
  }

  const openResume = (event) => {
    window.open(Resume, '_blank', 'noopener,noreferrer');
  }

  const changeTheme = (event) => {
    event.preventDefault();
    if (theme === "Night") {
      setTheme("Day");
      setIcon(nightIcon);
    }
    else {
      setTheme("Night");
      setIcon(dayIcon)
    }
  }

  useEffect(() => { document.body.style.background = theme === "Day" ? "#F1F1F1":'#000000' })

  return (
    <div className="App">
      <TransitionGroup className="ForeFront">
        <button onClick={changeTheme} className='ThemeToggle'><img alt="ThemeIcon" src={icon} /></button>
        <CSSTransition key={state} in={state} timeout={1000} classNames="fade" >
          <div >
            {state !== "SplashScreen" && <Navbar theme={theme} openResume={openResume} changePage={changePage}></Navbar>}
            {state === "SplashScreen" && <SplashScreen theme={theme} openResume={openResume} changePage={changePage}></SplashScreen>}
            {state === "AboutMe" && <AboutMe theme={theme}></AboutMe>}
            {state === "MyProjects" && <Projects theme={theme}></Projects>}
          </div>
        </CSSTransition>
      </TransitionGroup>


      <ParticleBackground theme={theme} className="Particles"></ParticleBackground>
    </div>
  );
}

export default App;
