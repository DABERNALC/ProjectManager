import NoProjects from "../../Components/NoProjects/NoProjects";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
function Projects() {
  return (
    
    <div>
        <h2>Mis Proyectos</h2>
        <GenericButton2 text="Agregar Proyecto"/>
        <NoProjects></NoProjects>
    </div>
  );
}

export default Projects;