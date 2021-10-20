import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id, img, title, description}= service;

    return (
        <div className='service-part  '>
           <img   src={img} alt="" />
             <div className='m-2'>
             <h3>{title}</h3>
              <p>{description.slice(0, 100)}</p>
             </div>
          <Link to = {`/serviceDetails/${id}`}>
          <div  className='m-2'> <button className='rounded '>Details</button></div>
          </Link>
        </div>
        
    );
};

export default Service;