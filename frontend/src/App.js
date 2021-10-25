import "./App.css";
import Home from "./Components/Login/home";
import MouseParticles from "react-mouse-particles";
import Admin_Auth from "./Components/Auth/Admin_Auth/Admin_Auth";
import NGO_Auth from "./Components/Auth/NGO_Auth/NGO_Auth";
import Factory_Auth from "./Components/Auth/Factory_Auth/Factory_Auth";
import Public_Auth from "./Components/SawoApis/public";
import Factories from "./Components/Admin/Factories/Factories";
import Add from "./Components/Admin/Add/Add";
import Public from "./Components/SawoApis/public";
import Inspect from "./Components/NGO/Inspect/Inspect";
import Reports from "./Components/Admin/Reports/Reports";
import File from "./Components/Public/File/File";
import Complains from "./Components/Public/complains/complains";
import Help from "./Components/Help/Help";
import Previous from "./Components/Public/Previous/Previos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./Ui/Home/Mainpage";
import Mainpage2 from "./Ui/Home/Mainpage2";
import Mainpage3 from "./Ui/Home/Mainpage3";
import Assign from "./Components/Assign/Assign";
import Notfound from "./Ui/Notfound/Notfound";
function App() {
  let routes;

  if (localStorage.getItem("permissions") === "admin") {
    routes = (
      <div>
        <Switch>
          <Route path="/admin/home" exact component={Mainpage} />
          <Route path="/admin/factories" exact component={Factories} />
          <Route path="/admin/complaints" exact component={Complains} />
          <Route path="/admin/add" exact component={Add} />
          <Route path="/admin/reports" exact component={Reports} />
          <Route path="/admin/assign" exact component={Assign} />
          <Route path="/*" component={Notfound} />
        </Switch>
      </div>
    );
  } else if (localStorage.getItem("permissions") === "ngo") {
    {
      console.log(1);
    }
    routes = (
      <div>
        <Switch>
          <Route path="/ngo/home" exact component={Mainpage2} />
          <Route path="/ngo/inspect" exact component={Inspect} />
          <Route path="/*" component={Notfound} />
        </Switch>
      </div>
    );
  } else if (localStorage.getItem("permissions") === "public") {
    routes = (
      <div>
        <Switch>
          <Route path="/user/home" exact component={Mainpage3} />
          <Route path="/user/previous" exact component={Previous} />
          <Route path="/user/file" exact component={File} />
          <Route path="/*" component={Notfound} />
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user/home" exact component={Mainpage3} />
            <Route path="/user/previous" exact component={Previous} />
            <Route path="/user/file" exact component={File} />
            <Route path="/help" exact component={Help} />
            <Route path="/public/auth" exact component={Public_Auth} />
            <Route path="/admin/auth" exact component={Admin_Auth} />
            <Route path="/ngo/auth" exact component={NGO_Auth} />
            <Route path="/factory/auth" exact component={Factory_Auth} />
            {routes}
            <Route path="/*" component={Notfound} />
          </Switch>
        </div>
      </Router>
      <MouseParticles g={0} num={6} color={["#04a045", "#133d25", "#7bb411"]} />
    </div>
  );
}

export default App;
