import "../Styles/Projects.css";
import ProjectsData from "../Styles/ProjectsData";

const Projects = (props) => {
     return (<div className="Projects">
          <h1 className="ProjectsTitle">My Projects</h1>
          <div className="ProjectsContainer">
               <div className="ProjectsGrid">
                    {ProjectsData.map((project) => {
                         return (
                              <div className="ProjectItem">
                                   <div className="subHeadingPrimary"><a href={project.projectURL} target="_blank" rel="noreferrer">{project.projectName}</a></div>
                                   <img alt="Project" src={project.projectPicture} style={{ height: "300px", width: "100%" }} ></img>
                                   <div className="ProjectDescription">{project.projectText}</div>
                              </div>
                         )
                    })}
               </div>
               <br></br>
               <br></br>
          </div>
     </div>
     )
}


export default Projects;