import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
     <footer className='bg-dark'>
         <div className='row'>
             <div className='col-md-6'>
              <h2 className='text-white'>Privacy policy</h2>
             </div>
             <div className='col-md-6'>
              <h2 className='text-white'>about us</h2>
             </div>
         </div>
     </footer>
    );
};

export default Footer;