import './App.css';
import AppNavbar from './componets/navbar';
import { MYContext } from './context';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Errpage from './pages/404/404';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import {useContext,useEffect} from 'react';
import axios from './Axios'
import Favorites from './pages/favorite/Favorites';



function App() {
  const {user,setUser}= useContext(MYContext);
  useEffect(()=>{
axios.post("/auto-login")
.then(({data})=>setUser(data))
.catch((err)=> console.log(err))
  },[])
  return (
    <Router>
   <AppNavbar />
    <Switch>
    <Route exact path="/">    <Home /></Route>
       {!user && (<>
      <Route exact path="/login">    <Login /></Route>
      <Route exact path="/signup">    <Signup /></Route>
      </>)}
      { user && ( <Route exact path="/my-favorites">   <Favorites /> </Route>)}
      <Route > <Errpage/></Route>
      <Route exact path="/err" > <Errpage/></Route>
    </Switch>
    </Router>
  );
}

export default App;
