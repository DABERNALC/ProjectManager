import AppStyle from'./App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar"
import NewProject from './Pages/NewProject/NewProject';
import Kanban from './Pages/Kanban/Kanban';
function App() {
  return (
    
    <div>
      <div className="App">
      <Header></Header>
      <SideBar></SideBar>

      </div>

    </div>
  );
}

export default App;
