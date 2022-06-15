import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "../Styles/ParticlesConfig";
import NightParticlesConfig from "../Styles/NightParticlesConfig";
const particlesInit = async (main) => {
     await loadFull(main);
};

const particlesLoaded = (container) => {
     console.log(container);
};

const ParticleBackground = (props) => {
     console.log(props.theme)
     if (props.theme === "Day"){
          return (
               <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={ParticlesConfig}
               />
          );
     }
     else{
          return (
               <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={NightParticlesConfig}
               />
          );
     }
     

};
export default ParticleBackground;