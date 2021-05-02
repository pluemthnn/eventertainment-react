import Navbar from "./components/header";
import Footerbar from "./components/footer";

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import UserMng from './pages/UserMng'
import EventMng from './pages/EventMng'
import Result from './pages/Result'
import Resulte from './pages/ResultE'
import Login from './pages/Login'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/UserMng' component={UserMng}/>
          <Route exact path='/EventMng' component={EventMng}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Resulte/:EventID' component={Resulte}/>
          <Route exact path="/Result/:username" component={Result} />
      </Switch>
      <Footerbar/> 
    </>
  );
}

export default App;
