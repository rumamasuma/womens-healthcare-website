import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Speciality from './Pages/Speciality/Speciality/Speciality';


function App() {
  return (
    <div className="App">
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
       <Home></Home>
       </Route>
       <Route exact path='/home'>
       <Home></Home>
       </Route>
       <Route exact path='/doctors'>
         <Doctors></Doctors>
       </Route>
       <Route exact path='/speciality'>
       <Speciality></Speciality>
       </Route>
       <Route path='/login'>
       <Login></Login>
       </Route>
       <Route path='/register'>
       <Register></Register>
       </Route>
       <Route exact path='*'>
       <NotFound></NotFound>
       </Route>
      </Switch>
      <Footer></Footer>
   </Router>
    </div>
  );
}

export default App;
