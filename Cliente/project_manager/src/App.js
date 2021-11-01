import AppStyle from "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import NewProject from "./Pages/NewProject/NewProject";
import Kanban from "./Pages/Kanban/Kanban";
import Projects from "./Pages/Projects/Projects";
import Teams from "./Pages/Teams/Teams";
import LogIn from "./Pages/LogIn/LogIn";
import AlertModal from "./Components/AlertModal/AlertModal";
import { BrowserRouter, Route } from "react-router-dom";
import SubTasks from "./Pages/SubTasks/SubTasks";
import PrivateRoute from "./Components/PrivateRoute";
import ProjectZoomIn from "./Components/ProjectZoomIn/ProjectZoomIn";
import ProjectProperties from "./Components/ProjectProperties/ProjectProperties";
import Notification from "./Components/Notification/Notification";
import Inconvenient from "./Components/Inconvenient/Inconvenient";
import AddParticipant from "./Components/AddParticipant/AddParticipant";
import { connect } from "react-redux";
{
  /*import SubTasks from './Pages/Subtasks/SubTasks';*/
}
function App(props) {
  return (
    <div>
      {/*
      
      / muestra la landing page
      /signIn es el formulario para entrar a una cuenta


      /app/etc muestra el header y el sidebar
      /app/teams muestra la vista de todos los equipos
      
      
      */}
      {/*}
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/signIn" exact>
            <LogIn mode="signIn" />
          </Route>
          <Route path="/signUp" exact>
            <LogIn mode="signUp" />
          </Route>

          <PrivateRoute
            path="/app"
            currentUser = {props.currentUser} 
            render={() => 
              <>
                <Header></Header>
                <SideBar></SideBar>
              </>
            }
          />
          <Route path="/app/teams" exact>
            <Teams />
          </Route>
          <Route path="/app/projects/:projectId" exact>
            <Kanban />
          </Route>
          <Route path="/app/subTasks" exact>
            <SubTasks />
          </Route>
          <Route path="/app/projects" exact>
            <Projects />
          </Route>
        </div>
      </BrowserRouter>
      */}
      {/*
      <AlertModal Text="¿Paco?"></AlertModal>
      <ProjectZoomIn NombreProjecto="Asistente virtual" 
      DescripcionProjecto="Lorem ipsum dolor sit amet consectetur adipiscing elit nisi faucibus vivamus montes proin congue hendrerit, torquent nisl"
      NombreCliente="Industrializados la 13"
      NombreEquipo="WPT Team"></ProjectZoomIn>
      <ProjectProperties></ProjectProperties>
      <Notification notifications={["Peticion de tarea de Nico","Peticion de tarea de Sebas"]}></Notification>
      <Inconvenient></Inconvenient>
      */}
        <AddParticipant></AddParticipant>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
      currentUser: state.UserInfo.id
  };
};
export default connect(mapStateToProps) (App);
