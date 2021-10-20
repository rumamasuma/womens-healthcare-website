import React from 'react';
import { Container, Nav ,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo6.png'
import './Header.css';


const Header = () => {
  
  const {user, logOut}= useAuth();

    return (
        <>
           <Navbar  sticky="top"  bg="light" variant="light" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home"> <img  className='img-fluid ' src={logo} alt="" />Qudrah Women's Health Care</Navbar.Brand>
    <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
          <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
          <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
          <Nav.Link as={Link} to="/speciality">Speciality</Nav.Link>
          {/* <Nav.Link as={Link} to="/consultation">Consultation</Nav.Link> */}
         
          {
            user?.email? 
            <button onClick={logOut} className='button-regular text-white rounded m-2'>
              Log Out</button>
                  :
             <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
      
         
          <Navbar.Text>
            Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar> 
        </>
    );
};

export default Header;