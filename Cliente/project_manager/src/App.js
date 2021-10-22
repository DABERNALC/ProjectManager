import AppStyle from'./App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar"
function App() {
  return (
    <div className="App">
      <Header className={AppStyle.Header}></Header>
      <SideBar className={AppStyle.SideBar}></SideBar>
    </div>
  );
}

export default App;
