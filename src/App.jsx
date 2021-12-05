import "./App.css";
import { Switch, Route } from "react-router-dom";
import LeftNav from "./Components/LeftNav/LeftNav";
import RightNav from "./Components/RightNav/RightNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Profile } from "./Components/Profile/Profile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignupPage from "./Components/SignupPage/SignupPage";
import ExploreTabs from "./Components/Explore/ExploreTabs";
import { Home } from "./Components/Home/home";
import Lists from './Components/Lists/Lists';
import { store } from "./Redux/store";
import Notification from "./Components/Notification/Notification";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import  Messages from "./Components/Messages/displayMessages";

function App() {

  const user = useSelector(state=>state.loggedIn);
  const history = useHistory();

  if(!user){
    history.push("/");
  } else if(user){
    history.push("/home");
  }

  return (
    <Switch>
      <Route path="/" exact>
        <SignupPage />
      </Route>
      <Route>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2 p-0">
              <LeftNav />
            </div>
            <div className="col-5 border p-0">
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/explore">
                  <ExploreTabs />
                </Route>
                <Route path="/notifications">
                  <Notification />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/lists">
                  <Lists />
                </Route>
                <Route path="/messages">
                  <Messages />
                </Route>
              </Switch>
            </div>
            <div className="col-3 p-0">
              <RightNav />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
