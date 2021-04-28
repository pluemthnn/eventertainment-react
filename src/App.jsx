import Navbar from "./components/header";
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUS'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aboutus' component={AboutUs}/>
      </Switch>
    </>
  );
}

export default App;
