import NoProjects from "../../Components/NoProjects/NoProjects";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import { Project } from "../../Components/Project/Project";
import ProjectsStyle from "./ProjectsStyle.module.css"

function Projects(props) {
  return (
    
    <div>
      <div>
        <h2>Mis Proyectos</h2>
        <GenericButton2 text="Agregar Proyecto"/>
      </div>
        <div className= {ProjectsStyle.ProjectsContainer}>
        { 
            props.projects.length>0?
                props.projects.map(  TheProject => (<Project ProjectName={TheProject.ProjectName} TeamName={TheProject.TeamName}/>))
            :
                <NoProjects/>
        }
        </div>
    </div>
  );
}


export default Projects;