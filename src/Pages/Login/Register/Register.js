import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import initializeAuthentication from '../Firebase/firebase.init';
import register from  '../../../images/register.jpg'

const Register = () => {
  initializeAuthentication();
    const {signInUsingGoogle , handleRegistration, handleEmailChange, handlePasswordChange , error} = useFirebase();

    return (
        <div className='row m-4'>
        <h2 className='login-heading '><i>Please Register For Medical Consultation</i></h2>
    <div className="col-md-5">
  <img src={register} alt="" />
    </div>
    <div className="col-md-4 login-card col-sm-12 mt-3 p-2">
    <Form  onSubmit ={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Patient's Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name"  required />
         </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  onBlur={handleEmailChange}  type="email" placeholder="Enter email" required/>

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control  onBlur={handlePasswordChange}   type="password" placeholder="Password" required />
{/* error showing */}
 <Form.Text className="text-danger"> {error}</Form.Text>
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