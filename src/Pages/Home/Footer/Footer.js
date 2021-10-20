import React from 'react';
import './Footer.css';
import logo from '../../../images/logo6.png';

const Footer = () => {
    return (
     <footer className='bg-success ' >
         <div className='row'>
             <div className='col-md-3 p-3 '>
             <img  className='img-fluid ' src={logo} alt="" /><p className='text-white'>Qudrah has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
             </div>
             <div className='col-md-3 p-3'>
              <h2 className='text-white'>Get us</h2>
            <address>
                <p className='text-white'> Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh
                <br />Mail us : qudrahwomenshealth@gmail.com
                </p> 
            </address>
            <p className='text-dark'>Copyright © 2020. All Rights Reserved.Qudrah Women's Health Care Ltd.</p>
             </div>
             <div className='col-md-3 p-3'>
              <h3 className='text-white'> For Virtual Consultation </h3>
              <h1  className='text-white'>Hot-Line [0120993]</h1>
             </div>
             <div className='col-md-3 p-3'>
              <h3 className='text-white'>Social Media Link </h3>
              <h4 className='text-white'>Facebook</h4>
              <h4 className='text-white'>Twitter</h4>
              <h4 className='text-white'>Linked In</h4>
              <h4 className='text-white'>Messenger</h4>
             </div>
         </div>
     </footer>
    );
};

export default Footer;