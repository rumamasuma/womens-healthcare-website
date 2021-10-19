import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import initializeAuthentication from '../Firebase/firebase.init';
import register from  '../../../images/register.jpg'

const Register = () => {
  initializeAuthentication();
    const {signInUsingGoogle } = useFirebase();

    return (
        <div className='row m-4'>
        <h2 className='login-heading '><i>Please Register For Medical Consultation</i></h2>
    <div className="col-md-5">
  <img src={register} alt="" />
    </div>
    <div className="col-md-4 login-card col-sm-12 mt-3 p-2">
    <Form  onSubmit ="">
    <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Patient's Name</Form.Label>
<Form.Control type="name" placeholder="Enter name" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
{/* <Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text> */}
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Button  type="submit" size="sm" className='button-regular'>Register</Button>
<p> Already have an account ? <Link to ="/login">Login</Link></p>

{/* google sign in button */}
<Button onClick={signInUsingGoogle}  size="sm" className=' button-regular'>
Google Sign In
</Button>
</Form>
    </div>

    </div>
);
};

export default Register;