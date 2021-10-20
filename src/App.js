import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Consultation from './Pages/Consultation/Consultation/Consultation';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import ServiceDetails from './Pages/Home/SeviceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Speciality from './Pages/Speciality/Speciality/Speciality';


function App() {
  return (
    <div className="App">
  <AuthProvider>
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
       <Route path='/consultation'>
       <Consultation></Consultation>
       </Route>
       <Route path='/serviceDetails/:serviceId'>
       <ServiceDetails></ServiceDetails>
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
  </AuthProvider>
    </div>
  );
}

export default App;
