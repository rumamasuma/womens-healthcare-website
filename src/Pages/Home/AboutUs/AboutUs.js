import React from 'react';
import './AboutUs.css';
import img from '../../../images/aboutUs/handshake2.jpg'
import { Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <h2>Why Choose Us</h2>
            <Card>
    <Card.Body>
      <Card.Text>
      <h2>Your Health Care is Our Responsibility</h2>
      <h3>We are Providing Best and Affordable Healthcare | Our Quality System is Ready to Help You !</h3>
   <p>Qudrah Women's Health Care has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards. </p>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={img}  className='about-img'/>
  </Card>
       </div>
    );
};

export default AboutUs;
