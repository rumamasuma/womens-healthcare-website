import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
     <footer className='bg-success'>
         <div className='row'>
             <div className='col-md-3'>
              <h2 className='text-white'>Privacy policy</h2>
              <h5 className='text-white'>home</h5>
              <h5 className='text-white'>home</h5>
             </div>
             <div className='col-md-3'>
              <h2 className='text-white'>about us</h2>
             </div>
             <div className='col-md-3'>
              <h2 className='text-white'>about us</h2>
             </div>
             <div className='col-md-3'>
              <h2 className='text-white'>about us</h2>
             </div>
         </div>
     </footer>
    );
};

export default Footer;