import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {img, title, description}= service;

    return (
        <div className='service-part '>
           <img  className= 'service-img '   src={img} alt="" />
           <div>
              <h3>{title}</h3>
              <p>{description.slice(0, 120)}</p>
           </div>
           <button>Read more</button>
        </div>
        
    );
};

export default Service;