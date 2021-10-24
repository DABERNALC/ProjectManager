import AppStyle from'./App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar"
import NewProject from './Pages/NewProject/NewProject';

function App() {
  return (
    
    <div>
      <div className="App">
        <Header className={AppStyle.Header}></Header>
        <SideBar className={AppStyle.SideBar}></SideBar>
        
      </div>
      <NewProject/>
    </div>
  );
}

export default App;
