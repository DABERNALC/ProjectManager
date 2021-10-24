import ProjectsStyle from "./projects.module.css";
import NoProjects from './Components/NoProjects/NoProjects.js';
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
function Projects() {
  return (
    
    <div>
        <h2>Mis Proyectos</h2>
        <GenericButton2/>
        <NoProjects></NoProjects>
    </div>
  );
}

export default Projects;