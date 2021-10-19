import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import login from '../../../images/login.jpg'
import './Login.css';

const Login = () => {
    return (
        <div className='row mt-4'>
            <h2 className='login-heading '>Please Login For Medical Consultation</h2>
        <div className="col-md-5">
      <img src={login} alt="" />
        </div>
        <div className="col-md-6 login-card">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Patient's Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit" size="lg" className='p-2 m-2'>
    Submit
  </Button>
</Form>
        </div>
<p></p>
        </div>
    );
};

export default Login;