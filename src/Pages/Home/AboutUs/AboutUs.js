import React from 'react';
import './AboutUs.css';
import img from '../../../images/aboutUs/handshake2.jpg'
import { Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <h1 className='about-heading m-5' >Why Choose Us ??</h1>
            <Card>
    <Card.Body>
      <Card.Text>
      <h2><i>Your Health Care is Our Responsibility</i></h2>
      <h3> <span className='about-heading2 p-3 m-3'> We are Providing Best and Affordable Healthcare </span> |<span className='about-heading m-3'> Our Quality System is Ready to Help You !</span></h3>
   <h5 className='m-5'>Qudrah Women's Health Care has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards. </h5>
      </Card.Text>
    </Card.Body>
    {/* <Card.Img variant="bottom" src={img}  className='about-img'/> */}
  </Card>
       </div>
    );
};

export default AboutUs;
