import Navbar from "./components/header";
import Footerbar from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import UserMng from "./pages/UserMng";
import EventMng from "./pages/EventMng";
//import Search from "./pages/Search";
import Login from "./pages/Login";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path='/aboutus' component={AboutUs}/> */}
        {/* <Route exact path='/search' component={Search}/> */}
        <Route exact path="/UserMng" component={UserMng} />
        <Route exact path="/EventMng" component={EventMng} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Result/:username" component={Result} />
      </Switch>
      <Footerbar />
    </>
  );
}

export default App;
