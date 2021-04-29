import Navbar from "./components/header";
import Footerbar from "./components/footer";

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUS'
import Search from './pages/Search'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/search' component={Search}/>
      </Switch>
      <Footerbar />
      
    </>
  );
}

export default App;
