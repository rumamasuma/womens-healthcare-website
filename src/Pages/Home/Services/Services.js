import React from 'react';
import {useState , useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
     const [services, setServices] = useState([]);
  
     useEffect(() =>{
     fetch('services.json')
     .then(res => res.json())
     .then(data =>setServices(data));
     },[])


    return (
        <div id="services">
            <h2>Qudrah Women's Healthcare Services</h2>
          <div className='row'>
            <div className= 'services-part '>
      {
    services.map( service => <Service  key={service.id}
        service ={service}
    ></Service>)
       }
       </div> 
      </div>
  </div>
    );
};

export default Services;