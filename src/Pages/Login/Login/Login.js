import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import login from '../../../images/login.jpg'
import initializeAuthentication from '../Firebase/firebase.init';
import './Login.css';

initializeAuthentication();

const Login = () => {

    const {signInUsingGoogle } = useFirebase();
      
    
    return (
        <div className='row m-4'>
            <h2 className='login-heading '><i>Please Login For Medical Consultation</i></h2>
        <div className="col-md-5">
      <img src={login} alt="" />
        </div>
        <div className="col-md-5 login-card col-sm-12 mt-3 p-2">

        <Form  onSubmit ="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Patient's Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button  type="submit" size="sm" className='button-regular'>Login</Button>
    <p>New Patients? <Link   to ='/register'>Create an Account  </Link></p>

  {/* google sign in button */}
  
  <Button onClick={signInUsingGoogle}  size="sm" className='p-2 m-2 button-regular'>
    Google Sign In
  </Button>
</Form>
        </div>
<p></p>
        </div>
    );
};

export default Login;