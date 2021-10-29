import AppStyle from './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar"
import NewProject from './Pages/NewProject/NewProject';
import Kanban from './Pages/Kanban/Kanban';
import Projects from "./Pages/Projects/Projects"
import Teams from './Pages/Teams/Teams';
import LogIn from './Pages/LogIn/LogIn';
import { BrowserRouter, Route } from "react-router-dom"
import SubTasks from './Pages/Subtasks/SubTasks';
function App() {
  return (
    <div>
      {/*
      
      / muestra la landing page
      /signIn es el formulario para entrar a una cuenta


      /app/etc muestra el header y el sidebar
      /app/teams muestra la vista de todos los equipos
      
      
      */}

      <BrowserRouter>
        <div className="App">
          <Route path="/" exact >
            <LandingPage />
          </Route>
          <Route path="/signIn" exact >
            <LogIn mode="signIn"/>
          </Route>
          <Route path="/signUp" exact >
            <LogIn mode="signUp"/>
          </Route>
          <Route path="/app"  >
            <Header></Header>
            <SideBar></SideBar>
          </Route>
          <Route path="/app/teams" exact >
            <Teams/>
          </Route>
          <Route path="/app/project" exact >
            <Kanban/>
          </Route>
          <Route path="/app/subTasks" exact>
          <SubTasks/>
          </Route>
        </div>


      </BrowserRouter>



    </div>
  );
}

export default App;
