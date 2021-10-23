import AppStyle from'./App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar"
import NoProjects from './Components/NoProjects/NoProjects';
function App() {
  return (
    
    <div className="App">
      <Header className={AppStyle.Header}></Header>
      <SideBar className={AppStyle.SideBar}></SideBar>
      <NoProjects></NoProjects>
    </div>
  );
}

export default App;
